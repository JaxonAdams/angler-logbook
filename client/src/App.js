import './App.css';

import { Routes, Route } from 'react-router-dom';

import { StoreProvider } from './utils/state/GlobalState';

import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

function App() {
  return (
      <div className='App'>
          <StoreProvider>
              <Routes>
                  <Route path='/' element={ <Home /> } />
                  <Route path='/signup' element={ <Signup /> } />
                  <Route path='/login' element={ <Login /> } />
                  <Route path='/dashboard' element={ <Dashboard /> } />
              </Routes>
          </StoreProvider>
      </div>
  );
}

export default App;
