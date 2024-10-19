import React, { useState } from "react";
import './footer.css'; // Import the separate CSS file

const ModeSwitcher = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={isDarkMode ? "app dark" : "app light"}>
      <h1>{isDarkMode ? "Dark Mode" : "Light Mode"}</h1>
      <div className="mode-switch" onClick={toggleMode}>
        <div className={`switch-slider ${isDarkMode ? "switch-slider-dark" : "switch-slider-light"}`}>
          {isDarkMode ? "🌙" : "☀️"}
        </div>
      </div>
    </div>
  );
};

export default ModeSwitcher;
