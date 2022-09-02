import React from 'react';

import Header from '../components/Header';
import Hero from '../components/Hero';
import HomeInfo from '../components/HomeInfo';
import HomeWelcome from '../components/HomeWelcome';

const Home = () => {
    return (
        <div className='home'>
            <Header />
            <Hero />
            <HomeInfo />
            <HomeWelcome />
        </div>
    );
};

export default Home;