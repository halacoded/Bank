import React from "react";

export const Filter = ({
  transactionType,
  settransactionType,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
}) => {
  const handleButton = (type) => {
    settransactionType(type);
  };
  return (
    <div className="flex gap-10">
      <h1>Filter : </h1>
      <button
        onClick={() => {
          handleButton("");
        }}
        className={` border-solid border-black rounded-5 shadow-md gap-5 ${
          transactionType === "" ? "bg-blue-700" : "bg-white"
        }`}
      >
        All
      </button>
      <button
        onClick={() => {
          handleButton("deposit");
        }}
        className={`border-solid border-black rounded-5 shadow-md gap-5 ${
          transactionType === "deposit" ? "bg-blue-700" : "bg-white"
        }`}
      >
        Deposit
      </button>
      <button
        onClick={() => {
          handleButton("withdraw");
        }}
        className={`border-solid border-black rounded-5 shadow-md gap-5 ${
          transactionType === "withdraw" ? "bg-blue-700" : "bg-white"
        }`}
      >
        Withdraw
      </button>
      <button
        onClick={() => {
          handleButton("transfer");
        }}
        className={`border-solid border-black rounded-5 shadow-md gap-5 ${
          transactionType === "transfer" ? "bg-blue-700" : "bg-white"
        }`}
      >
        Transfer
      </button>
      <button
        onClick={() => {
          handleButton("Date");
        }}
        className={`border-solid border-black rounded-5 shadow-md gap-5 ${
          transactionType === "Date" ? "bg-blue-700" : "bg-white"
        }`}
      >
        Date
      </button>
      {transactionType === "Date" && (
        <div className="flex gap-5">
          <div>
            <label>Start Date:</label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div>
            <label>End Date:</label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
        </div>
      )}
    </div>
  );
};
