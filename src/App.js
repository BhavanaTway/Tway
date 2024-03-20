//  Bg images changes
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
  const [themeIndex, setThemeIndex] = useState(0); // Keep track of the current theme index
  const [boardName, setBoardName] = useState('');

  const themes = [
    "url('https://m.media-amazon.com/images/I/51jIvKOEZeL._AC_UF1000,1000_QL80_.jpg')",
    "url('https://i.pinimg.com/736x/62/b8/92/62b8921486642e19163d9b5503b5784b.jpg')",
    "url('https://w0.peakpx.com/wallpaper/484/194/HD-wallpaper-%E2%9C%BCplace-of-peace%E2%9C%BC-pretty-grass-premade-bg-attractions-in-dreams-beautiful-clouds-leaves-green-stock-flowers-resources-animals-flying-birds-lakes-lovely-colors-love-four-seasons-bench.jpg')",
    "url('https://m.media-amazon.com/images/I/71+17bVYHxL.jpg')",
    "url('https://i.pinimg.com/originals/7a/79/dc/7a79dc469fcc9bb2aee3276280ba24cc.jpg')"
  ]; // Define different background images

  const handleClearData = () => {
    setData([]);
  };

  const handleAddBoard = () => {
    if (boardName.trim() !== '') {
      const newBoard = { name: boardName.trim(), backgroundImage: themes[themeIndex] };
      setData([...data, newBoard]);
      setBoardName('');
    }
  };

  const handleThemeChange = () => {
    // Increment the theme index or reset to 0 if it reaches the end
    setThemeIndex((themeIndex + 1) % themes.length);
  };

  return (
    <div className="container mx-auto p-4" style={{ backgroundImage: themes[themeIndex], backgroundSize: 'cover', minHeight: '100vh' }}>
      <Header onThemeChange={handleThemeChange} onClearData={handleClearData}  />

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
            <li key={index} className="mb-2">
              {board.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BoardManager;


