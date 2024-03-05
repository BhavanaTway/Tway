// 10 Dispaying the paragraph when the click on the button 

import React, { useState } from 'react';

const ButtonComponent = () => {
  const [displayText, setDisplayText] = useState('');

  const handleButtonClick = (text) => {
    setDisplayText(text);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center h-screen bg-gray-400 ">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded self-start"
        onClick={() => handleButtonClick(<div className='sm:w-full tracking-wider  text-[#151414] pl-4'>
          Last month we introduced the new AI-powered Bing and Microsoft Edge, your copilot for the web – delivering better search, complete answers, a new chat experience and the ability to create content. Already, we have seen that chat is reinventing how people search with more than 100 million chats to date.</div>)}
      >
        Button 1
      </button>
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded self-start"
        onClick={() => handleButtonClick(<div className='sm:w-full  tracking-wider  text-[#1a1919] pl-4'>
          Through these simple steps, Bing Image Creator allows anyone to transform ideas into visual pieces. It stands as a testament to the seamless integration of AI into creative expression, enabling the production of stunning imagery with just a few keystrokes. </div>)}
      >
        Button 2
      </button>
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded self-start"
        onClick={() => handleButtonClick(<div className='sm:w-full tracking-wider  text-[#181717] pl-4'>
          In today’s digital age, visuals are more important than ever. Whether you are a blogger, marketer, or graphic designer, creating high-quality images is essential for grabbing attention and conveying your message effectively.</div>)}
      >
        Button 3
      </button>
      <div className="col-span-3 mt-4">
        <p>{displayText}</p>
      </div>
    </div>
  );
};

export default ButtonComponent;





























