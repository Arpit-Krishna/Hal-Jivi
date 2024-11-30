import React, { useState, useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }
  }, []);

  const handleThemeToggle = () => {
    setIsDarkMode(prevMode => {
      const newMode = !prevMode;
      localStorage.setItem('theme', newMode ? 'dark' : 'light');
      return newMode;
    });
  };

  return (
    <button
      onClick={handleThemeToggle}
      style={{
        backgroundColor: 'transparent',
        color: isDarkMode ? '#fff' : '#000',
        border: 'none',
        borderRadius: '50%',
        padding: '8px',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {isDarkMode ? (
        <FaMoon size={20} />
      ) : (
        <FaSun size={20} />
      )}
    </button>
  );
}

export default ThemeToggle;
