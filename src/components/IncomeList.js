import React from "react";
import IncomeItems from "./IncomeItems";

function IncomeList({ income, setIncome }) {
  function removeIncome(i) {
    let temp = income.filter((v, index) => index != i);
    setIncome(temp);
  }

  function sortByDate(a, b) {
    return a.date - b.date;
  }

  return (
    <div className="income-list">
      {income.sort(sortByDate).map((value, index) => (
        <IncomeItems
          key={index}
          income={value}
          index={index}
          removeIncome={removeIncome}
        />
      ))}
    </div>
  );
}

export default IncomeList;
