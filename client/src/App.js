import './App.css';

import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import { StoreProvider } from './utils/state/GlobalState';

import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
      <div className={`App ${menuOpen ? 'noscroll' : ''}`}>
          <StoreProvider>
              <Routes>
                  <Route path='/' element={ <Home menuOpen={menuOpen} setMenuOpen={setMenuOpen} /> } />
                  <Route path='/signup' element={ <Signup menuOpen={menuOpen} setMenuOpen={setMenuOpen} /> } />
                  <Route path='/login' element={ <Login menuOpen={menuOpen} setMenuOpen={setMenuOpen} /> } />
              </Routes>
          </StoreProvider>
      </div>
  );
}

export default App;
