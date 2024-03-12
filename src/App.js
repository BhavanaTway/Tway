

// State and Props 

import React, { useState } from "react";
const ParentComponent = () => {
  const [data, setData] = useState("");

  const updateData = (newData) => {
    setData(newData);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Parent Component</h1>
      <ChildComponent data={data} updateData={updateData} />
    </div>
  );
};

const ChildComponent = ({ data, updateData }) => {
  const handleClick = () => {
    updateData("New Data");
  };

  return (
    <div className="border border-gray-300 p-4 rounded-md mb-4">
      <h2 className="text-lg font-semibold mb-2">Child Component</h2>
      <p>Data from parent: {data}</p>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
        onClick={handleClick}
      >
        Update Data
      </button>
    </div>
  );
};

export default ParentComponent;








