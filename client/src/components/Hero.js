import React from 'react';
import { Link } from 'react-router-dom';

const Hero = ({ isLoggedIn }) => {
    return (
        <div className='hero'>
            {!isLoggedIn ? 
                // user is not logged in
                <div className='hero-info'>
                    <div>
                        <h2 className='hero-title hero-intro'>Keep Track of</h2>
                        <h2 className='hero-title'>How You Catch Fish</h2>
                    </div>
                    <Link to='/signup' className='btn-link'>Sign Up Today!</Link>
                </div>
            :
                // user is logged in
                <div className='hero-info'>
                    <div>
                        <h2 className='hero-title hero-intro'>Keep Track of</h2>
                        <h2 className='hero-title'>How You Catch Fish</h2>
                        <p className='hero-txt'>Welcome! You can log your catch on your dashboard!</p>
                    </div>
                    <Link to='/dashboard' className='btn-link'>User Dashboard</Link>
                </div>
            }
        </div>
    );
};

export default Hero;
