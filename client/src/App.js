import './App.css';

import { Routes, Route } from 'react-router-dom';

import { StoreProvider, useStoreContext } from './utils/state/GlobalState';

import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';

function App() {
  const [state] = useStoreContext();
  const { isMenuOpen } = state;

  return (
      <div className={`App ${isMenuOpen ? 'noscroll' : ''}`}>
          <StoreProvider>
              <Routes>
                  <Route path='/' element={ <Home /> } />
                  <Route path='/signup' element={ <Signup /> } />
                  <Route path='/login' element={ <Login /> } />
              </Routes>
          </StoreProvider>
      </div>
  );
}

export default App;
