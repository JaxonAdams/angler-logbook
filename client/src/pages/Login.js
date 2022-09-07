import React, { useEffect } from 'react';

import Header from '../components/Header';
import LoginForm from '../components/LoginForm';

const Login = ({ menuOpen, setMenuOpen }) => {
    useEffect(() => {
        document.title = 'Log In'
    }, []);
    
    return (
        <div className='login'>
            <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <div className='login-container'>
                <div className='login-img' />
                <LoginForm />
            </div>
        </div>
    );
};

export default Login;