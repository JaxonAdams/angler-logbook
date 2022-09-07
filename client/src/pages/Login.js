import React from 'react';

import Header from '../components/Header';
import LoginForm from '../components/LoginForm';

const Login = ({ menuOpen, setMenuOpen }) => {
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