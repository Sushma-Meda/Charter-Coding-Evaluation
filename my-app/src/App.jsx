
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
  const [filters, setFilters] = useState({ month: "", year: "2025" });
  const [isFilterActive, setIsFilterActive] = useState(false);


    const getData = async () => {
      setLoading(true);
      setError("");

      try {
        const response = await fetchTransactions(true);

        if (response.success) {
          setTransactions(response.data);
        }
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

  useEffect(() => {
    getData();
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
          {/* <Filters filters={filters} setFilters={setFilters} /> */}
          {/* <Filters
            filters={filters}
            setFilters={setFilters}
            transactions={transactions}
          /> */}

          <Filters
            filters={filters}
            setFilters={setFilters}
            transactions={transactions}
            setIsFilterActive={setIsFilterActive}
          />

          <RewardSummary
            transactions={transactions}
            customerId={selectedCustomer}
          />
          <TransactionTable
            transactions={transactions}
            customerId={selectedCustomer}
            filters={filters}
            isFilterActive={isFilterActive}
          />
        </>
      )}
    </Wrapper>
  );
}

export default App;
