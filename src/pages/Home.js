import React, { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { me } from "../api/auth";
import { Withdraw } from "../api/auth";
import { Deposit } from "../api/auth";
const Home = () => {
  const queryClinet = useQueryClient();
  const [amount, setAmount] = useState(0);
  const [transactionType, setTransactionType] = useState("");
  const { data: user, isLoading } = useQuery({
    queryKey: ["me"],
    queryFn: me,
  });

  const { mutate: Depo } = useMutation({
    mutationKey: ["Deposit"],
    mutationFn: () => Deposit(amount),
    onSuccess: () => {
      queryClinet.invalidateQueries(["me"]);
    },
  });
  const { mutate: Draw } = useMutation({
    mutationKey: ["Withdraw"],
    mutationFn: () => Withdraw(amount),
    onSuccess: () => {
      queryClinet.invalidateQueries(["me"]);
    },
  });
  const handleTransaction = (type) => {
    setTransactionType(type);
  };
  const handleChange = (e) => {
    setAmount(e.target.value);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (transactionType === "Deposite") {
      Depo();
    } else if (transactionType === "withdraw") {
      Draw();
    }
    setTransactionType("");
  };
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    //container
    <div>
      <div className="flex items-center justify-center flex-col gap-20 h-96">
        <div className="bg-white flex flex-col items-center justify-center border-solid border-black  rounded-5 w-80  h-50 shadow-md gap-5 ">
          <h1>Your Balance :</h1>
          <h1>{user?.balance}</h1>
        </div>

        <div className="bg-white flex flex-col items-center justify-center border-solid border-black  rounded-5 w-80  h-50 shadow-md gap-5">
          {" "}
          <div>
            <h1>Chose Type Of Transaction</h1>
          </div>
          <div className="gap-7">
            <button
              className={`mr-5 hover:bg-blue-500 rounded-6 shadow-md ${
                transactionType === "Deposite" ? "bg-blue-700" : " bg-white"
              }`}
              onClick={() => {
                handleTransaction("Deposite");
              }}
            >
              Deposite
            </button>
            <button
              className={`mr-5  hover:bg-blue-500 rounded-6 shadow-md ${
                transactionType === "withdraw" ? "bg-blue-700" : "bg-white"
              }`}
              onClick={() => {
                handleTransaction("withdraw");
              }}
            >
              withdraw
            </button>
          </div>
          <form onSubmit={handleFormSubmit}>
            <input
              placeholder="amount"
              type="number"
              value={amount}
              onChange={handleChange}
            ></input>
            <button
              className="w-32 h-10 rounded-m font-bold border-black border-solid shadow-md hover:bg-blue-500 text-black"
              type="submit"
            >
              submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
