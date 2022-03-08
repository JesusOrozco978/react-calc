import React, { useState } from "react";

const DisplayPage = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operators, setOperators] = useState("+");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  const isValidNumber = () =>
    !Number.isNaN(Number(num1)) &&
    !Number.isNaN(Number(num2)) &&
    num1 !== "" &&
    num2 !== "";

  const Calculation = () => {
    if (!isValidNumber()) {
      setResult("");
      return setError("This is not a number");
    }
    setError("");
    setResult("");
    switch (operators) {
      case "+":
        return setResult(Number(num1) + Number(num2));

      case "-":
        return setResult(Number(num1) - Number(num2));
      case "*":
        return setResult(Number(num1) * Number(num2));
      case "/":
        return setResult(Number(num1) / Number(num2));
      default:
        return setError("This is an Error");
    }
  };

  return (
    <div className="displayPage">
      <div>
        <input value={num1} onChange={(event) => setNum1(event.target.value)} />
        <select
          value={operators}
          onChange={(event) => setOperators(event.target.value)}
        >
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
        <input value={num2} onChange={(event) => setNum2(event.target.value)} />
        <button onClick={Calculation}>=</button>
        <input value={result} readOnly />
      </div>
      <div className="Error">{error}</div>
    </div>
  );
};

export default DisplayPage;
