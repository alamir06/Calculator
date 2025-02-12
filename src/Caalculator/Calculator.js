// FileName: App.js

import React, { useState } from "react";
import "./calc.css";
import * as math from "mathjs";

function Calculator() {
    const [expression, setExpression] = useState("");
    const [screenVal, setScreenVal] = useState("");
    const [customVariables, setCustomVariables] = useState({});
    // Default mode is "rad"
    const [mode, setMode] = useState("rad");

    function handleChange(e) {
        setExpression(e.target.value);
    }

    function handleClick(input) {
        setExpression((prevExpression) => prevExpression + input);
    }

    function calculate() {
        try {
            const allVariables = {
                ...customVariables,
                pi: Math.PI,
                e: Math.E,
                // Add factorial function
                fact: math.factorial, 
                sin: mode === "rad" ? Math.sin : math.sin,
                cos: mode === "rad" ? Math.cos : math.cos,
                tan: mode === "rad" ? Math.tan : math.tan,
                asin: mode === "rad" ? Math.asin : math.asin,
                acos: mode === "rad" ? Math.acos : math.acos,
                atan: mode === "rad" ? Math.atan : math.atan,
            };

            const result = math.evaluate(expression, allVariables);
            if (typeof result === "number" && !isNaN(result)) {
                setExpression(Number(result).toFixed(4));
            } else {
                setExpression("Error: Invalid expression");
            }
        } catch (error) {
            setScreenVal("Error: Invalid expression");
        }
    }

    function clearScreen() {
        setExpression("");
        setScreenVal("");
    }

    function backspace() {
        const newExpression = expression.slice(0, -1);
        setExpression(newExpression);
    }

    function toggleMode() {
        // Toggle between "rad" and "deg" modes
        setMode(mode === "rad" ? "deg" : "rad");
    }

    return (
        <>
            <div className="container">
                <div className="calculator">
                    <h1>Scientific Calculator</h1>
                    <div className="form">
                    <div className="display">
                        <input
                            className="inputt"
                            type="text"
                            value={expression}
                            onChange={handleChange}
                        />
                    </div>
                    {/* <div className="button-section"> */}
                    <div className="button">
                            {[
                                "+",
                                "-",
                                "*",
                                "/",
                                "^",
                                "sqrt(",
                                "sin(",
                                "cos(",
                                "tan(",
                                "cbrt(",
                                "asin(",
                                "acos(",
                                "atan(",
                                // Add open parenthesis
                                "(", 
                                // Add close parenthesis
                                ")", 
                            ].map((input) => (
                                <button key={input}
                                    onClick={() =>
                                        handleClick(input)} className="input">
                                    {input}
                                </button>
                            ))}
                           <div className="button">
                            <button onClick={() =>
                                handleClick("pi")} className="input">Pi</button>
                            <button onClick={() =>
                                handleClick("fact(")} className="input">Factorial</button>
                        </div>
                      
                            <button className="input"
                                onClick={clearScreen} >
                                C
                            </button>
                            <button className="input"
                                onClick={calculate}>
                                =
                            </button>
                            <button className="input"
                                onClick={backspace}>
                                del
                            </button>
                            <button onClick={() =>
                                handleClick(".")} className="input">,</button>
                        </div>
                        <div className="button">
                            {["1", "2", "3", "4", "5",
                                "6", "7", "8", "9", "0"].map(
                                    (input) => (
                                        <button key={input}
                                            onClick={() =>
                                                handleClick(input)} className="input">
                                            {input}
                                        </button>
                                    )
                                )}
                        </div>
                     
                    </div>
                </div>
                <div className="variables"></div>
                </div>
        </>
    );
}

export default Calculator;
