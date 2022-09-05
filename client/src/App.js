import './App.css';

import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Signup from './pages/Signup';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={`App ${menuOpen ? 'noscroll' : ''}`}>
      <Routes>
        <Route path='/' element={ <Home menuOpen={menuOpen} setMenuOpen={setMenuOpen} /> } />
        <Route path='/signup' element={ <Signup menuOpen={menuOpen} setMenuOpen={setMenuOpen} /> } />
      </Routes>
    </div>
  );
}

export default App;
