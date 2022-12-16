import logo from './logo.svg';
import MainContent from './Components/MainContent';
import Navbar from './Components/Navbar';
import { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(true)

  function toggle(){
    setDarkMode(prevValue => !prevValue)
  }

  return (
    <div className="App">
      <Navbar darkMode={darkMode} toggle={toggle}/>
      <MainContent darkMode={darkMode}/>
    </div>
  );
}

export default App;
