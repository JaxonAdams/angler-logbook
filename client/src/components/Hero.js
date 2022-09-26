import React from 'react';
import { Link } from 'react-router-dom';

import auth from '../utils/auth';

const Hero = () => {
    return (
        <div className='hero'>
            <div className='hero-info'>
                <div>
                    <h2 className='hero-title hero-intro'>Keep Track of</h2>
                    <h2 className='hero-title'>How You Catch Fish</h2>
                </div>
                {auth.isLoggedIn() ? 
                    <Link to='/dashboard' className='btn-link'>User Dashboard</Link>
                    :
                    <Link to='/signup' className='btn-link'>Sign Up Today!</Link>
                }
            </div>
        </div>
    );
};

export default Hero;
