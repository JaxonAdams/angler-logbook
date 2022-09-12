import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import auth from '../utils/auth';

const LoginForm = () => {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = e => {
        e.preventDefault();
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();

        // login fetch request
        const postData = async () => {
            // login request
            const response = await fetch('/api/users/login', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formState)
            });

            // Error handling
            if (!response.ok) {
                if (response.status === 404) {
                    setErrorMessage('No account found with that email.');
                };

                if (response.status === 401) {
                    setErrorMessage('Incorrect password.');
                };
            };
            
            // parse data
            const data = await response.json();
            
            // if JWT included in response, login using token
            if (data.token) {
                setErrorMessage('');
                auth.login(data.token);
            };
        };

        // if form is complete, run fetch request
        if (formState.email && formState.password) {
            postData();
        } else {
            setErrorMessage('Please enter your email and password.');
        };
    };

    return (
        <form className='login-form' onSubmit={handleSubmit}>
            <div>
                <h1 className='form-title'>Log Into Your Account</h1>
                <p className='form-subtitle'>Get back to logging what you catch!</p>
            </div>
            <input 
                className='signup-form-input' 
                type='email' 
                name='email'
                defaultValue={formState.email} 
                onChange={handleChange}
                placeholder='Email' 
            />
            <input 
                className='signup-form-input' 
                type='password'
                name='password' 
                defaultValue={formState.password}
                onChange={handleChange} 
                placeholder='Password' 
            />
            <button className='submit-btn' type='submit'>Log In</button>
            {errorMessage && <p className='form-txt'>{errorMessage}</p>}
            <Link className='txt-link form-link' to='/signup'>Sign Up Instead</Link>
        </form>
    );
};

export default LoginForm;