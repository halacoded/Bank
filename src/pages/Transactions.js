import React from "react";
import { getTransactions } from "../api/auth";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { TransactionIteam } from "../componet/TransactionIteam";
import { Search } from "../componet/Search";
import { Selector } from "../componet/Selector";
const Transactions = () => {
  const [query, setQuery] = useState("");
  const [transactionType, settransactionType] = useState("");
  const { data } = useQuery({
    queryKey: ["getTransactions"],
    queryFn: getTransactions,
  });
  const transactionsfilter = data?.filter((transaction) => {
    const matchesQuery = query === "" || transaction.amount === parseInt(query);
    const matchesType =
      transactionType === "" || transactionType === transaction.type;
    return matchesQuery && matchesType;
  });
  const transactionsList = transactionsfilter?.map((transaction) => (
    <TransactionIteam key={transaction.id} transaction={transaction} />
  ));

  return (
    //container
    <div className="flex items-center justify-center flex-col gap-6">
      <Search setQuery={setQuery} />
      <Selector settransactionType={settransactionType} />
      {transactionsList}
    </div>
  );
};

export default Transactions;
