import React from "react";
import PropTypes from "prop-types";
import { calculatePoints } from "../helpers/calculatePoints";

function RewardSummary({ transactions, customerId }) {
  const customerTxns = transactions.filter(
    (txn) => txn.customerId === customerId
  );

  const rewardsByMonth = customerTxns.reduce((acc, txn) => {
    const date = new Date(txn.date);
    const month = date.toLocaleString("default", { month: "long" });
    const key = `${month} ${date.getFullYear()}`;
    const points = calculatePoints(txn.amount);
    acc[key] = (acc[key] || 0) + points;
    return acc;
  }, {});

  const total = Object.values(rewardsByMonth).reduce((a, b) => a + b, 0);

  return (
    <div>
      <h4>Rewards Summary for Customer {customerId}</h4>
      <ul>
        {Object.entries(rewardsByMonth).map(([month, points]) => (
          <li key={month}>
            {month}: {points} points
          </li>
        ))}
      </ul>
      <strong>Total: {total} points</strong>
    </div>
  );
}

RewardSummary.propTypes = {
  transactions: PropTypes.array.isRequired,
  customerId: PropTypes.string.isRequired,
};

export default RewardSummary;
