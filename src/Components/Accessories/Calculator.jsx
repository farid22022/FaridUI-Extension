import { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const calculateResult = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  const clearInput = () => {
    setInput("");
  };

  return (
    <div className="flex justify-center items-center  ">
      <div className="w-64 bg-white rounded-lg shadow-lg p-5  bg-gradient-to-r from-red-500 to-green-500">
        <div className="mb-4 p-2 bg-gray-200 rounded text-right text-xl font-mono">
          {input || "0"}
        </div>
        <div className="grid grid-cols-4 gap-2">
          {/* Buttons */}
          {["7", "8", "9", "/"].map((item) => (
            <button
              key={item}
              onClick={() => handleClick(item)}
              className="p-4 bg-blue-700 text-black rounded hover:bg-blue-600"
            >
              {item}
            </button>
          ))}
          {["4", "5", "6", "*"].map((item) => (
            <button
              key={item}
              onClick={() => handleClick(item)}
              className="p-4 bg-blue-700 text-black rounded hover:bg-blue-600"
            >
              {item}
            </button>
          ))}
          {["1", "2", "3", "-"].map((item) => (
            <button
              key={item}
              onClick={() => handleClick(item)}
              className="p-4 bg-blue-500 text-black rounded hover:bg-blue-600"
            >
              {item}
            </button>
          ))}
          <button
            onClick={clearInput}
            className="p-4 bg-red-800 text-black rounded hover:bg-red-600"
          >
            C
          </button>
          <button
            onClick={() => handleClick("0")}
            className="p-4 bg-blue-500 text-black rounded hover:bg-blue-600"
          >
            0
          </button>
          <button
            onClick={() => handleClick(".")}
            className="p-4 bg-blue-500 text-black rounded hover:bg-blue-600"
          >
            .
          </button>
          <button
            onClick={() => handleClick("+")}
            className="p-4 bg-blue-500 text-black rounded hover:bg-blue-600"
          >
            +
          </button>
          <button
            onClick={calculateResult}
            className="col-span-4 p-4 bg-slate-900 text-black rounded hover:bg-green-600"
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
