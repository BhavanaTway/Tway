//  Number count
import React, { useState } from "react";

const App = () => {
  const [number, setNumber] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  const increaseNumber = () => {
    if (number < 10) {
      setNumber(number + 1);
      setErrorMessage("");
    } else {
      alert("Maximum limit reached!");
    }
  };

  const decreaseNumber = () => {
    if (number > 0) {
      setNumber(number - 1);
      setErrorMessage("");
    } else {
      alert("Minimum limit reached!");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-3xl mb-4">Number Counter</h1>
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l"
            onClick={decreaseNumber}
          >
            -
          </button>
          <input
            type="text"
            className="w-16 text-center border border-gray-400 py-2"
            value={number}
            readOnly
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r"
            onClick={increaseNumber}
          >
            +
          </button>
        </div>
        {errorMessage && (
          <p className="text-red-500 mt-2">{errorMessage}</p>
        )}
      </div>
    </div>
  );
};

export default App;

























