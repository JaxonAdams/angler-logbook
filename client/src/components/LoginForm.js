import React from 'react';
import { Link } from 'react-router-dom';

const LoginForm = () => {
    return (
        <form className='login-form'>
            <div>
                <h1 className='form-title'>Log Into Your Account</h1>
                <p className='form-subtitle'>Get back to logging what you catch!</p>
            </div>
            <input className='signup-form-input' type='email' placeholder='Email' />
            <input className='signup-form-input' type='password' placeholder='Password' />
            <button className='submit-btn' type='submit'>Log In</button>
            <Link className='txt-link form-link' to='/signup'>Sign Up Instead</Link>
        </form>
    );
};

export default LoginForm;