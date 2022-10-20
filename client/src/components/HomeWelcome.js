import React from 'react';
import { Link } from 'react-router-dom';

const HomeWelcome = () => {
    return (
        <div className='home-welcome'>
            <div className='welcome-container'>
                <h3 className='welcome-title'>Welcome to the Community!</h3>
                <p className='welcome-txt'>Browse other anglers' logs to keep up with your friends or see what lures are working nearby!</p>
                <Link to='/view-all' className='btn-link no-hover'>Recently Caught</Link>
            </div>
            <div className='welcome-img-container'>
                <div className='community-photo' />
            </div>
        </div>
    );
};

export default HomeWelcome;
