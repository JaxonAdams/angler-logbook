import React from 'react';
import { Link } from 'react-router-dom';

const SignupForm = () => {
    return (
        <form className='signup-form'>
            <div>
                <h1 className='form-title'>Create an Account</h1>
                <p className='form-subtitle'>Get started logging the fish you catch!</p>
            </div>
            <input className='signup-form-input' type='text' placeholder='Name' />
            <input className='signup-form-input' type='email' placeholder='Email' />
            <input className='signup-form-input' type='password' placeholder='Password' />
            <button className='submit-btn' type='submit'>Sign Up</button>
            <Link className='txt-link form-link' to='/'>Log In Instead</Link>
        </form>
    );
};

export default SignupForm;