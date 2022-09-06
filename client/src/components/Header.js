import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Header = ({ menuOpen, setMenuOpen }) => {
    const [activePage, setActivePage] = useState('');

    useEffect(() => {
        const location = window.location.pathname.split('/')[1];
        setActivePage(location);
    }, []);

    return (
        <header className='header'>
            <Link to='/'>
                <h1 className='header-title'>Angler's <span>Logbook</span></h1>
            </Link>
            <div className={`
                header-nav 
                ${menuOpen && 'show'}
            `}>
                <Link to='/' className={`${activePage === 'login' ? 'current-page' : ''}`}>Log In</Link>
            </div>
            <div className={`menu-btn ${menuOpen && 'close'}`} onClick={() => setMenuOpen(!menuOpen)}>
                <div className='menu-line' />
                <div className='menu-line' />
                <div className='menu-line' />
            </div>
        </header>
    );
};

export default Header;