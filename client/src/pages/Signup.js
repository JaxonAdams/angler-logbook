import React from 'react';

import Header from '../components/Header';
import SignupForm from '../components/SignupForm';

const Signup = ({ menuOpen, setMenuOpen }) => {
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