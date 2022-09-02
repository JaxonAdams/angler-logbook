import React from 'react';

const HomeWelcome = () => {
    return (
        <div className='home-welcome'>
            <div className='welcome-container'>
                <h3 className='welcome-title'>Welcome to the Community!</h3>
                <p className='welcome-txt'>Browse other anglers' logs to keep up with your friends or see what lures are working nearby!</p>
            </div>
            <div className='welcome-img-container'>
                <div className='community-photo' />
            </div>
        </div>
    );
};

export default HomeWelcome;
