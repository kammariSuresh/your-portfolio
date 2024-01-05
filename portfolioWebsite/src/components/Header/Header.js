import React, { useState } from 'react';

const Header = () => {
  // State variables to manage the website name and font size
  const [websiteName, setWebsiteName] = useState('Your Website');
  const [fontSize, setFontSize] = useState(24); // Initial font size

  // Function to handle changing the website name
  const handleWebsiteNameChange = (event) => {
    const newName = event.target.value;
    setWebsiteName(newName);
  };

  // Function to handle changing the font size
  const handleFontSizeChange = (event) => {
    const newSize = parseInt(event.target.value, 10);
    setFontSize(newSize);
  };

  return (
    <header style={{ backgroundColor: '#333', color: '#fff', padding: '5px', textAlign: 'center' }}>
      <h1 style={{ fontSize: `${fontSize}px` }}>
        <input
          type="text"
          value={websiteName}
          onChange={handleWebsiteNameChange}
          style={{textAlign:"center", backgroundColor: 'transparent', color: 'inherit', border: 'none', outline: 'none', fontSize: 'inherit' }}
        />
      </h1>
      <input type="range" min="10" max="50" value={fontSize} onChange={handleFontSizeChange} />
    </header>
  );
};

export default Header;
