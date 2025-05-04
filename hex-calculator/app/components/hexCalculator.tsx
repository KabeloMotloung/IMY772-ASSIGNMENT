/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { hexAdd, hexSubtract, hexMultiply, hexDivide } from "../../utils/hexCalculator";

const buttons = [
  "7", "8", "9", 
  "4", "5", "6", 
  "1", "2", "3", 
  "0", "A", "B", 
  "C", "D", "E", "F"
];

const operators = ["+", "-", "*", "/"];

export default function HexCalculator() {
  const [input1, setInput1] = useState<string>("");
  const [input2, setInput2] = useState<string>("");
  const [operator, setOperator] = useState<string>("");
  const [result, setResult] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleHexInput = (val: string) => {
    setError("");
    if (!operator) {
      if (input1.length < 2) setInput1((prev) => prev + val);
    } else {
      if (input2.length < 2) setInput2((prev) => prev + val);
    }
  };

  const handleOperator = (op: string) => {
    if (input1 && !operator) {
      setOperator(op);
      setError("");
    }
  };

  const handleClear = () => {
    setInput1("");
    setInput2("");
    setOperator("");
    setResult("");
    setError("");
  };

  const handleCalculate = () => {
    try {
      if (!input1 || !operator) throw new Error("Enter first number and operator");
      if (!input2) throw new Error("Enter second number");
      
      let res = "";
      switch (operator) {
        case "+": res = hexAdd(input1, input2); break;
        case "-": res = hexSubtract(input1, input2); break;
        case "*": res = hexMultiply(input1, input2); break;
        case "/": res = hexDivide(input1, input2); break;
        default: throw new Error("Invalid operator");
      }
      setResult(res);
      setError("");
    } catch (err: any) {
      setError(err.message);
      setResult("");
    }
  };

  return (
    <div className="calculator-container" data-testid="calculator-container">
      <div className="calculator">
        <h1 className="calculator-title">Hex Calculator</h1>
        
        <div className="calculator-display" data-testid="calculator-display">
          <div className="calculator-expression" data-testid="expression">
            {input1} {operator} {input2}
          </div>
          <div className="calculator-result" data-testid="result">
            {error ? (
              <span className="text-error">{error}</span>
            ) : result ? (
              <span className="text-result">= {result}</span>
            ) : (
              <span className="text-placeholder">0x</span>
            )}
          </div>
        </div>

        <div className="calculator-buttons">
          <div className="calculator-numpad">
            {buttons.map((btn) => (
              <button
                key={btn}
                className={`calculator-btn ${btn === "0" ? "btn-zero" : ""}`}
                onClick={() => handleHexInput(btn)}
                data-testid={`button-${btn}`}
              >
                {btn}
              </button>
            ))}
          </div>

          <div className="calculator-operations">
            {operators.map((op) => (
              <button
                key={op}
                className={`calculator-btn btn-operator ${operator === op ? "btn-operator-active" : ""}`}
                onClick={() => handleOperator(op)}
                data-testid={`button-${op}`}
              >
                {op}
              </button>
            ))}

            <button
              className="calculator-btn btn-equals"
              onClick={handleCalculate}
              data-testid="button-equals"
            >
              =
            </button>
            <button
              className="calculator-btn btn-clear"
              onClick={handleClear}
              data-testid="button-clear"
            >
              AC
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
