import React from 'react';

import Header from '../components/Header';
import Hero from '../components/Hero';
import HomeInfo from '../components/HomeInfo';

const Home = () => {
    return (
        <div className='home'>
            <Header />
            <Hero />
            <HomeInfo />
        </div>
    );
};

export default Home;