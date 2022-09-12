import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { XSquare, Check2Square } from 'react-bootstrap-icons';

import auth from '../utils/auth';

const SignupForm = () => {
    const [formState, setFormState] = useState({ name: '', email: '', password: '' });
    const [pwMatch, setPwMatch] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = e => {
        e.preventDefault();
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    const confirmPassword = e => {
        e.preventDefault();

        if (e.target.value === formState.password) {
            setPwMatch(true);
        } else if ((e.target.value !== formState.password) && pwMatch === true) {
            setPwMatch(false);
        };
    };

    const handleSubmit = e => {
        e.preventDefault();

        // create user fetch request
        const postData = async () => {
            // fetch post request
            const response = await fetch('/api/users', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formState)
            });

            // parse data
            const data = await response.json();

            // error handling
            if (!response.ok) {
                if (data.code === 11000) {
                    setErrorMessage('An account with that email already exists.');
                };
            };

            // if JWT included in response, log user in
            if (data.token) {
                setErrorMessage('');
                auth.login(data.token);
            };
        };

        // if form is complete, run fetch request
        if (formState.name && formState.email && formState.password) {
            // also check that password matches confirmed password
            if (pwMatch) {
                postData();
            };
        } else {
            setErrorMessage('Please enter all the required information.');
        };
    };

    return (
        <form className='signup-form' onSubmit={handleSubmit}>
            <div>
                <h1 className='form-title'>Create an Account</h1>
                <p className='form-subtitle'>Get started logging the fish you catch!</p>
            </div>
            <input 
                className='signup-form-input' 
                type='text' 
                name='name'
                placeholder='Name' 
                onChange={handleChange}
            />
            <input 
                className='signup-form-input' 
                type='email'
                name='email' 
                placeholder='Email' 
                onChange={handleChange}
            />
            <input 
                className='signup-form-input' 
                type='password'
                name='password' 
                placeholder='Password'
                onChange={handleChange} 
            />
            <input 
                className='signup-form-input'
                type='password'
                name='confirmPassword'
                placeholder='Confirm Password'
                onChange={confirmPassword}
            />
            <p className='form-txt'>Passwords match? {pwMatch ? <Check2Square /> : <XSquare />}</p>
            <button className='submit-btn' type='submit'>Sign Up</button>
            {errorMessage && <p className='form-txt'>{errorMessage}</p>}
            <Link className='txt-link form-link' to='/login'>Log In Instead</Link>
        </form>
    );
};

export default SignupForm;