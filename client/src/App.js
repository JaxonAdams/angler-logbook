import './App.css';

import { Routes, Route } from 'react-router-dom';

import { StoreProvider } from './utils/state/GlobalState';

import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';

function App() {
  return (
      <div className='App'>
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
