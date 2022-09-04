import React from 'react';

import Header from '../components/Header';
import Hero from '../components/Hero';
import HomeInfo from '../components/HomeInfo';
import HomeWelcome from '../components/HomeWelcome';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className='home'>
            <Header />
            <Hero />
            <HomeInfo />
            <HomeWelcome />
            <Footer />
        </div>
    );
};

export default Home;