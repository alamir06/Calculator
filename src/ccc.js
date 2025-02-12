import React, { useState } from "react";

export default function Calculator() {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");

  // Define safe evaluation function
  const safeEval = (expr) => {
    try {
      const safeMath = {
        sin: Math.sin,
        cos: Math.cos,
        tan: Math.tan,
        sqrt: Math.sqrt,
        log: Math.log,
        abs: Math.abs,
        round: Math.round,
        pi: Math.PI,
        e: Math.E,
      };
      return Function(`"use strict"; return (${expr})`).call(safeMath);
    } catch {
      return "Error";
    }
  };

  // Handle button clicks
  const handleButtonClick = (value) => {
    setExpression((prev) => prev + value);
  };

  // Evaluate Expression
  const handleEvaluate = () => {
    setResult(safeEval(expression));
  };

  // Clear Input
  const handleClear = () => {
    setExpression("");
    setResult("");
  };

  return (
    <div className="p-5 max-w-md mx-auto bg-gray-100 shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-3">React Calculator</h2>
      <input
        type="text"
        value={expression}
        className="w-full p-2 mb-3 border rounded"
        readOnly
      />
      <div className="text-right text-xl mb-3">{result}</div>

      {/* Button Grid */}
      <div className="grid grid-cols-4 gap-2">
        {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "(", ")"].map(
          (btn) => (
            <button
              key={btn}
              className="p-2 bg-blue-500 text-white rounded"
              onClick={() => handleButtonClick(btn)}
            >
              {btn}
            </button>
          )
        )}
        <button className="p-2 bg-green-500 text-white rounded" onClick={handleEvaluate}>
          =
        </button>
        <button className="p-2 bg-red-500 text-white rounded" onClick={handleClear}>
          C
        </button>
      </div>

      {/* Advanced Functions */}
      <div className="grid grid-cols-3 gap-2 mt-3">
        {["sin", "cos", "tan", "sqrt", "log", "pi"].map((func) => (
          <button
            key={func}
            className="p-2 bg-gray-500 text-white rounded"
            onClick={() => handleButtonClick(`${func}(`)}
          >
            {func}
          </button>
        ))}
      </div>
    </div>
  );
}
