
import transactions from "../mock/transactionData";

export const fetchTransactions = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true; 
      if (success) {
        resolve(transactions);
      } else {
        reject("Failed to fetch transactions");
      }
    }, 1000);
  });
};
