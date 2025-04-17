

import transactions from "../../public/mock/transactionData";

export const fetchTransactions = (forceSuccess = true) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldSucceed = forceSuccess || Math.random() < 0.8;

      if (shouldSucceed) {
        resolve({
          success: true,
          data: transactions,
        });
      } else {
        reject({
          success: false,
          message: "Failed to fetch transactions",
        });
      }
    }, 1000);
  });
};
