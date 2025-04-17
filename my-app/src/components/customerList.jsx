import React from "react";
import PropTypes from "prop-types";
import { List, ListItem } from "./CustomerListStyles";

function CustomerList({ transactions, setSelectedCustomer }) {
  const uniqueCustomers = [
    ...new Set(transactions?.map((txn) => txn?.customerId)),
  ];

  return (
    <div>
      <h3>Customer List</h3>
      <List>
        {uniqueCustomers?.map((customerId) => (
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
