import React from 'react';
import Header from '../components/Header';

const Login = ({ menuOpen, setMenuOpen }) => {
    return (
        <div className='login-container'>
            <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            Hello World
        </div>
    );
};

export default Login;