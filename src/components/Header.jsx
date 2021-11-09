import React, { useContext } from 'react';
import '../styles/Header.css';
import ThemeContext from '../context/ThemeContext';


const Header = ({ darkMode, setDarkMode }) => {
  const handleClick = () => {
    setDarkMode(!darkMode);
  }

  const colorDark = useContext(ThemeContext);

  return (
    <div className="Header"
      style={darkMode ? { backgroundColor: colorDark, color: 'white' }
        : { backgroundColor: 'white' }}>
      <h1 style={!darkMode ? { color: colorDark } : null}>ReactHooks</h1>
      <button
        style={darkMode ? { color: 'white' } : { color: colorDark }}
        type="button"
        onClick={handleClick}>
        {darkMode ? 'Dark Mode' : 'Light Mode'}
      </button>
    </div>
  )
}

export default Header;

