import React, { useEffect } from 'react';

import { useStoreContext } from '../utils/state/GlobalState';

import Header from '../components/Header';
import LoginForm from '../components/LoginForm';

const Login = ({ menuOpen, setMenuOpen }) => {
    useEffect(() => {
        document.title = 'Log In'
    }, []);

    const [state] = useStoreContext();
    const { isMenuOpen } = state;
    
    return (
        <div className={`login ${isMenuOpen ? 'noscroll' : ''}`}>
            <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <div className='login-container'>
                <div className='login-img' />
                <LoginForm />
            </div>
        </div>
    );
};

export default Login;
