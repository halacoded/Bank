import React from "react";

export const TransactionIteam = ({ transaction }) => {
  const formattedDate = new Date(transaction.createdAt).toLocaleDateString();
  return (
    <div
      key={transaction.id}
      className="bg-white flex  items-center justify-center border-solid border-black  rounded-5 w-80  h-50 shadow-md gap-5 "
    >
      <h1>{transaction.amount}</h1>
      <h1>{formattedDate}</h1>
      <h1>{transaction.type}</h1>
    </div>
  );
};
