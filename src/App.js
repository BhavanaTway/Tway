//1. Responsive page
// import React from 'react';
// const App = () => {
//   return (
//     <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
//       <h1 className="text-3xl font-bold mb-8">Responsive Page Example</h1>
//       <div className="max-w-lg w-full bg-white shadow-md p-8 rounded-lg">
//         <p className="text-lg mb-4">
//           This is a responsive page created with React and Tailwind CSS.
//         </p>
//         <p className="text-lg">
//           Resize your browser window to see the layout adjust accordingly.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default App;


// 10 Dispaying the paragraph when the click on the button 

// import React, { useState } from 'react';

// const ButtonComponent = () => {
//   const [displayText, setDisplayText] = useState('');

//   const handleButtonClick = (text) => {
//     setDisplayText(text);
//   };

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center h-screen bg-gray-400 ">
//       <button
//         className="bg-blue-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded self-start"
//         onClick={() => handleButtonClick(<div className='sm:w-full tracking-wider  text-[#151414] pl-48'>
//           Last month we introduced the new AI-powered Bing and Microsoft Edge, your copilot for the web – delivering better search, complete answers, a new chat experience and the ability to create content. Already, we have seen that chat is reinventing how people search with more than 100 million chats to date.</div>)}
//       >
//         Button 1
//       </button>
//       <button
//         className="bg-green-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded self-start "
//         onClick={() => handleButtonClick(<div className='sm:w-full  tracking-wider  text-[#1a1919] pl-48'>
//           Through these simple steps, Bing Image Creator allows anyone to transform ideas into visual pieces. It stands as a testament to the seamless integration of AI into creative expression, enabling the production of stunning imagery with just a few keystrokes. </div>)}
//       >
//         Button 2
//       </button>
//       <button
//         className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded self-start"
//         onClick={() => handleButtonClick(<div className='sm:w-full tracking-wider  text-[#181717] pl-48'>
//           In today’s digital age, visuals are more important than ever. Whether you are a blogger, marketer, or graphic designer, creating high-quality images is essential for grabbing attention and conveying your message effectively.</div>)}
//       >
//         Button 3
//       </button>
//       <div className="col-span-3 mt-4">
//         <p>{displayText}</p>
//       </div>
//     </div>
//   );
// };

// export default ButtonComponent;


// Import necessary libraries
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Define your components
const Home = () => {
  return (
    <div className="bg-gray-200 h-screen flex justify-center items-center">
      <h1 className="text-3xl font-bold">Home Page</h1>
    </div>
  );
};

const About = () => {
  return (
    <div className="bg-gray-200 h-screen flex justify-center items-center">
      <h1 className="text-3xl font-bold">About Page</h1>
    </div>
  );
};

const Contact = () => {
  return (
    <div className="bg-gray-200 h-screen flex justify-center items-center">
      <h1 className="text-3xl font-bold">Contact Page</h1>
    </div>
  );
};

// Define your routing component
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
};

// Render your App component
export default App;


























