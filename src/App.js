import React, {useContext} from 'react';
import Header from './components/Header';
import Characters from './components/Characters';
import useDarkMode from './Hooks/useDarkMode';
import ThemeContext from './context/ThemeContext'

import './App.css';

function App() {
  const colorDark = useContext(ThemeContext)
  const [darkMode, setDarkMode] = useDarkMode();
  return (
    <div className="App"  style={darkMode? {backgroundColor: colorDark, color: 'white'} : {backgroundColor: 'white'}}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
      <Characters darkMode={darkMode} />
    </div>
  );
}

export default App;
