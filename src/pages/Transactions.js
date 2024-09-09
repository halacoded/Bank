import React from "react";
import { getTransactions } from "../api/auth";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { TransactionIteam } from "../componet/TransactionIteam";
import { Search } from "../componet/Search";
import { Filter } from "../componet/Filter";
const Transactions = () => {
  const [query, setQuery] = useState("");
  const [transactionType, settransactionType] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const { data } = useQuery({
    queryKey: ["getTransactions"],
    queryFn: getTransactions,
  });
  const transactionsfilter = data?.filter((transaction) => {
    const matchesQuery = query === "" || transaction.amount === parseInt(query);
    const matchesType =
      transactionType === "" ||
      transactionType === transaction.type ||
      transactionType === "Date";
    const matchesDate =
      transactionType !== "Date" ||
      ((!startDate ||
        new Date(transaction.createdAt).toLocaleDateString() >=
          new Date(startDate).toLocaleDateString()) &&
        (!endDate ||
          new Date(transaction.createdAt).toLocaleDateString() <=
            new Date(endDate).toLocaleDateString()));

    return matchesQuery && matchesType && matchesDate;
  });

  const transactionsList = transactionsfilter?.map((transaction) => (
    <TransactionIteam key={transaction.id} transaction={transaction} />
  ));

  return (
    //container
    <div className="flex items-center justify-center flex-col gap-6">
      <Search setQuery={setQuery} />

      <Filter
        transactionType={transactionType}
        settransactionType={settransactionType}
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
      />
      {transactionsList && transactionsList.length > 0 ? (
        transactionsList
      ) : (
        <p>No transactions found.</p>
      )}
    </div>
  );
};

export default Transactions;
