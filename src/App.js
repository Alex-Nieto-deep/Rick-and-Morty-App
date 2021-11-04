import React from 'react';
import Header from './components/Header';
import Characters from './components/Characters';
import useDarkMode from './Hooks/useDarkMode';

import './App.css';

function App() {
  const [darkMode, setDarkMode] = useDarkMode();
  return (
    <div className="App">
      <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
      <Characters darkMode={darkMode} />
    </div>
  );
}

export default App;
