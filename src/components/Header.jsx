import React, { useState } from 'react';
import '../styles/Header.css';


const Header = ({darkMode, setDarkMode}) => {
  const handleClick = () => {
    setDarkMode(!darkMode);
  }

  return (
    <div className="Header" style={darkMode? {backgroundColor: 'black', color: 'white'} : {backgroundColor: 'white'}}>
      <h1>ReactHooks</h1>
      <button
        style={darkMode? {color: 'white'} : null}
        type="button"
        onClick={handleClick}>
        {darkMode? 'Dark Mode' : 'Light Mode'}
      </button>
    </div>
  )
}

export default Header;

