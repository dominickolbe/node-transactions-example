import { Merchant, Transaction } from "./types";

// returns list of merchants ids without duplicates
export const getMerchantsByTransactions = (
  transactions: Array<Transaction>
) => {
  const merchants = [...new Set(transactions.map((i) => i.merchant_id))];
  return merchants;
};

// returns list of merchants with ranking by user id
export const getRankingByUser = (
  user: number,
  transactions: Array<Transaction>,
  merchants: Array<Merchant>
) => {
  return merchants.map((merchant) => {
    // filter list by merchants
    const filteredTransactions = transactions.filter(
      (transaction) => transaction.merchant_id === merchant.id
    );

    // calculate totalAmount by all users
    const totalAmount = filteredTransactions
      .map((i) => i.amount)
      .reduce((total, value) => total + value, 0);

    // calculate totalAmount by given users
    const totalAmountByUser = filteredTransactions
      .filter((transaction) => transaction.user_id == user)
      .map((i) => i.amount)
      .reduce((total, value) => total + value, 0);

    return {
      ...merchant,
      totalAmount: totalAmountByUser / totalAmount,
    };
  });
};
