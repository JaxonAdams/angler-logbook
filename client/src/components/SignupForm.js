import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import auth from '../utils/auth';

const SignupForm = () => {
    const [formState, setFormState] = useState({ name: '', email: '', password: '' });

    const handleChange = e => {
        e.preventDefault();
        setFormState({ ...formState, [e.target.name]: e.target.value });
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

            // if JWT included in response, log user in
            if (data.token) {
                auth.login(data.token);
            };
        };

        // if form is complete, run fetch request
        if (formState.name && formState.email && formState.password) {
            postData();
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
            <button className='submit-btn' type='submit'>Sign Up</button>
            <Link className='txt-link form-link' to='/login'>Log In Instead</Link>
        </form>
    );
};

export default SignupForm;