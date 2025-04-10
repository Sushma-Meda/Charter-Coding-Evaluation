import React, { useState } from "react";
import PropTypes from "prop-types";
import { calculatePoints } from "../helpers/calculatePoints";
import styled from "styled-components";

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin-top: 20px;
`;

const Th = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
`;

const Td = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;

function TransactionTable({ transactions, customerId, filters }) {
  const [page, setPage] = useState(1);
  const pageSize = 5;

  const filtered = transactions.filter((txn) => {
    const date = new Date(txn.date);
    return (
      txn.customerId === customerId &&
      date.getFullYear().toString() === filters.year &&
      ("0" + (date.getMonth() + 1)).slice(-2) === filters.month
    );
  });

  const totalPages = Math.ceil(filtered.length / pageSize);
  const paginated = filtered.slice((page - 1) * pageSize, page * pageSize);

  return (
    <div>
      <h4>Transactions ({filtered.length})</h4>
      {filtered.length === 0 ? (
        <p>No transactions for this filter</p>
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
                <tr key={txn.transactionId}>
                  <Td>{txn.transactionId}</Td>
                  <Td>{txn.date}</Td>
                  <Td>${txn.amount.toFixed(2)}</Td>
                  <Td>{calculatePoints(txn.amount)}</Td>
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
