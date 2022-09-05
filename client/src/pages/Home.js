import React from 'react';

import Header from '../components/Header';
import Hero from '../components/Hero';
import HomeInfo from '../components/HomeInfo';
import HomeWelcome from '../components/HomeWelcome';
import Footer from '../components/Footer';

const Home = ({ menuOpen, setMenuOpen }) => {
    return (
        <div className='home'>
            <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <Hero />
            <HomeInfo />
            <HomeWelcome />
            <Footer />
        </div>
    );
};

export default Home;