import React, { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { me } from "../api/auth";
import { Withdraw } from "../api/auth";
import { Deposit } from "../api/auth";
const Home = () => {
  const queryClinet = useQueryClient();
  const [amount, setAmount] = useState(0);
  const [transactionType, setTransactionType] = useState("");
  const { data: user } = useQuery({
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

  return (
    //container
    <div>
      {/* cards container*/}
      <div className="flex items-center justify-center flex-col gap-6">
        {/*balance card */}
        <div className="flex flex-col items-center justify-center border-solid border-black  rounded-5 w-80  h-50 shadow-md gap-5">
          <h1>{user?.balance}</h1>
        </div>
        {/*deposite withdraw card */}
        <div className="bg-red-50 flex flex-col items-center justify-center border-solid border-black  rounded-5 w-80  h-50 shadow-md gap-5">
          {" "}
          <div>
            <h1>Chose Type Of Transaction</h1>
          </div>
          <div className="gap-7">
            <button
              className="mr-5 bg-slate-600 hover:bg-blue-500 "
              onClick={() => {
                handleTransaction("Deposite");
              }}
            >
              Deposite
            </button>
            <button
              className="mr-5 bg-purple-600"
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
