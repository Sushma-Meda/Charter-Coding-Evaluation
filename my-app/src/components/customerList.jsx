import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
  cursor: pointer;
  &:hover {
    color: blue;
  }
`;

function CustomerList({ transactions, setSelectedCustomer }) {
  const uniqueCustomers = [
    ...new Set(transactions.map((txn) => txn.customerId)),
  ];

  return (
    <div>
      <h3>Customer List</h3>
      <List>
        {uniqueCustomers.map((customerId) => (
          <ListItem
            key={customerId}
            onClick={() => setSelectedCustomer(customerId)}
          >
            Customer ID: {customerId}
          </ListItem>
        ))}
      </List>
    </div>
  );
}

CustomerList.propTypes = {
  transactions: PropTypes.array.isRequired,
  setSelectedCustomer: PropTypes.func.isRequired,
};

export default CustomerList;
