import React, { useState } from "react";
import PropTypes from "prop-types";
import { calculatePoints } from "../helpers/calculatePoints";
import { Table, Th, Td } from "./TransactionTableStyles"; 


function TransactionTable({ transactions, customerId, filters }) {
  const [page, setPage] = useState(1);
  const pageSize = 5;

  const filtered = transactions.filter((txn) => {
    const date = new Date(txn?.date);
    return (
      txn.customerId === customerId &&
      date.getFullYear().toString() === filters.year &&
      ("0" + (date.getMonth() + 1)).slice(-2) === filters.month
    );
  });

  const totalPages = Math.ceil(filtered.length / pageSize);
  const paginated = filtered.slice((page - 1) * pageSize, page * pageSize);


const recent = transactions.filter((txn) => {
  const transactionDate = new Date(txn.date);
  const today = new Date();
  const startOfCurrentMonth = new Date(
    today.getFullYear(),
    today.getMonth(),
    1
  );
  const startOfThreeMonthsAgo = new Date(startOfCurrentMonth);
  startOfThreeMonthsAgo.setMonth(startOfCurrentMonth.getMonth() - 2);
  return (
    txn.customerId === customerId &&
    transactionDate >= startOfThreeMonthsAgo &&
    transactionDate <= today
  );
});

console.log(recent);


  return (
    <div>
      <h4>
        Transactions ({filtered.length > 0 ? filtered.length : recent.length})
      </h4>
      {filtered.length === 0 ? (
        <>
          <p>
            {recent.length > 0 && `Last three months Transactions : ${recent.length}`}
          </p>
          {recent.length > 0 ? (
            <Table>
              <thead>
                <tr>
                  <Th>Transaction ID</Th>
                  <Th>Date</Th>
                  <Th>Amount</Th>
                  <Th>Points</Th>
                </tr>
              </thead>
              <tbody>
                {recent.map((txn) => (
                  <tr key={txn?.transactionId}>
                    <Td>{txn?.transactionId}</Td>
                    <Td>{txn?.date}</Td>
                    <Td>${txn?.amount.toFixed(2)}</Td>
                    <Td>{calculatePoints(txn?.amount)}</Td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            <div>
              {filtered.length === 0 ? (
                <p>No transactions for this month</p>
              ) : (
                ""
              )}
            </div>
          )}
        </>
      ) : (
        <>
          <Table>
            <thead>
              <tr>
                <Th>Transaction ID</Th>
                <Th>Date</Th>
                <Th>Amount</Th>
                <Th>Points</Th>
              </tr>
            </thead>
            <tbody>
              {paginated.map((txn) => (
                <tr key={txn?.transactionId}>
                  <Td>{txn?.transactionId}</Td>
                  <Td>{txn?.date}</Td>
                  <Td>${txn?.amount.toFixed(2)}</Td>
                  <Td>{calculatePoints(txn?.amount)}</Td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div>
            Page: {page} / {totalPages} &nbsp;
            <button
              onClick={() => setPage((p) => Math.max(p - 1, 1))}
              disabled={page === 1}
            >
              Prev
            </button>
            <button
              onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
              disabled={page === totalPages}
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}

TransactionTable.propTypes = {
  transactions: PropTypes.array.isRequired,
  customerId: PropTypes.string.isRequired,
  filters: PropTypes.object.isRequired,
};

export default TransactionTable;

