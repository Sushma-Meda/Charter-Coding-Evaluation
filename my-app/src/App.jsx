// App.js
import React, { useEffect, useState } from "react";
import { fetchTransactions } from "./api/fetchTransactions";
import CustomerList from "./components/customerList";
import RewardSummary from "./components/rewardSummary";
import TransactionTable from "./components/transactionTable";
import Filters from "./components/filters";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 20px;
`;

function App() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [filters, setFilters] = useState({ month: "04", year: "2025" });

  useEffect(() => {
    fetchTransactions()
      .then((data) => {
        setTransactions(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <Wrapper>
      <CustomerList
        transactions={transactions}
        setSelectedCustomer={setSelectedCustomer}
      />
      {selectedCustomer && (
        <>
          <Filters filters={filters} setFilters={setFilters} />
          <RewardSummary
            transactions={transactions}
            customerId={selectedCustomer}
          />
          <TransactionTable
            transactions={transactions}
            customerId={selectedCustomer}
            filters={filters}
          />
        </>
      )}
    </Wrapper>
  );
}

export default App;
