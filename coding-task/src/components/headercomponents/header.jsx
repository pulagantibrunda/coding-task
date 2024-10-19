import React, { useState } from 'react';

const ThemeToggler = () => {
  // Define a state to keep track of the current theme, default is light
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // Function to toggle the theme
  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };

  // Define styles for light and dark themes
  const lightTheme = {
    backgroundColor: 'white',
    color: 'black',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  };

  const darkTheme = {
    backgroundColor: 'black',
    color: 'white',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  };

  return (
    <div style={isDarkTheme ? darkTheme : lightTheme}>
      <h1>{isDarkTheme ? 'Dark Theme' : 'Light Theme'}</h1>
      <button onClick={toggleTheme}>
        {isDarkTheme ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
      </button>
    </div>
  );
};

export default ThemeToggler;
