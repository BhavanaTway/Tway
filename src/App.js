//1. Responsive page
import React from 'react';
const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold mb-8">Responsive Page Example</h1>
      <div className="max-w-lg w-full bg-white shadow-md p-8 rounded-lg">
        <p className="text-lg mb-4">
          This is a responsive page created with React and Tailwind CSS.
        </p>
        <p className="text-lg">
          Resize your browser window to see the layout adjust accordingly.
        </p>
      </div>
    </div>
  );
};

export default App;
































