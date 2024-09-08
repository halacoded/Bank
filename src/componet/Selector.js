import React from "react";

export const Selector = ({ settransactionType }) => {
  return (
    <div>
      {" "}
      Filter:
      <select
        className="form-select"
        onChange={(e) => {
          settransactionType(e.target.value);
        }}
      >
        <option value="" selected>
          All
        </option>
        <option value="deposit">Deposit</option>
        <option value="withdraw">withDraw</option>
        <option value="transfer">Transfer</option>
        <option>date</option>
      </select>
    </div>
  );
};
