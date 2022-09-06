import React, { useEffect } from 'react';

import Header from '../components/Header';
import SignupForm from '../components/SignupForm';

const Signup = ({ menuOpen, setMenuOpen }) => {
    useEffect(() => {
        document.title = 'Sign Up';
    }, []);

    return (
        <div className='signup'>
            <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <div className='signup-container'>
                <SignupForm />
                <div className='signup-img' />
            </div>
        </div>
    );
};

export default Signup;