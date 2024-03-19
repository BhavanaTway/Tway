// Color change
import React, { useState } from 'react';

const Header = ({ onThemeChange, onClearData }) => {

  return (
    <header className="bg-blue-300 text-black py-4 px-6 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Board Manager</h1>
      <div className="flex items-center">
        <button onClick={onClearData} className="bg-red-500 text-white px-4 py-2 rounded mr-2">Clear Data</button>
        <button onClick={onThemeChange} className="bg-green-500 text-white px-4 py-2 rounded">Change Theme</button>
      </div>
    </header>
  );
};

const BoardManager = () => {
  const [data, setData] = useState([]);
  const [theme, setTheme] = useState('light');
  const [boardName, setBoardName] = useState('');

  const handleClearData = () => {
    setData([]);
  };

  const handleAddBoard = () => {
    if (boardName.trim() !== '') {
      const newBoard = { name: boardName.trim(), backgroundImage: 'https://techcrunch.com/wp-content/uploads/2023/02/chatgpt-bing.jpg?resize=1200,727' };
      setData([...data, newBoard]);
      setBoardName('');
    }
  };

  const handleThemeChange = () => {
    setTheme(theme === 'light' ? 'dark' : 'light' );
  };

  return (
    <div className={`container mx-auto p-4 ${theme === 'dark'? 'bg-gray-500 text-black' : ''}`}>
      <Header onThemeChange={handleThemeChange} onClearData={handleClearData} />

      {/* Add board input and button */}
      <div className="mt-4">
        <input
          type="text"
          placeholder="Enter Board Name"
          value={boardName}
          onChange={(e) => setBoardName(e.target.value)}
          className="border border-gray-300 rounded px-3 py-1 mr-2"
        />
        <button onClick={handleAddBoard} className="bg-blue-500 text-white px-4 py-2 rounded mr-2">Add Board</button>
      </div>

      {/* Display the list of boards */}
      <div className="mt-4">
        <h2 className="text-lg font-semibold mb-2">Boards:</h2>
        <ul>
          {data.map((board, index) => (
            <li key={index} className="mb-2" style={{ backgroundImage: '' ? 'https://techcrunch.com/wp-content/uploads/2023/02/chatgpt-bing.jpg?resize=1200,727' : 'https://www.androidauthority.com/wp-content/uploads/2023/03/bing-image-creator-ai-creature-zeros-ones-scaled.jpg' }}>
              {board.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BoardManager;













    

