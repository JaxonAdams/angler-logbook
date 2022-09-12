import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import auth from '../utils/auth';

const Header = ({ menuOpen, setMenuOpen }) => {
    const [activePage, setActivePage] = useState('');

    useEffect(() => {
        const location = window.location.pathname.split('/')[1];
        setActivePage(location);
    }, []);

    const handleLogout = e => {
        e.preventDefault();
        auth.logout();
    };

    return (
        <header className='header'>
            <Link to='/'>
                <h1 className='header-title'>Angler's <span>Logbook</span></h1>
            </Link>
            <div className={`
                header-nav 
                ${menuOpen && 'show'}
            `}>
                {auth.isLoggedIn() ? 
                    <>
                        <Link to='/' onClick={handleLogout}>Logout</Link>
                        <p className='header-greeting'>Hello, <span>{auth.getName().split(' ')[0]}</span>!</p>
                    </>
                :
                    <>
                        <Link to='/signup' className={`${activePage === 'signup' ? 'current-page' : ''}`}>Sign Up</Link>
                        <Link to='/login' className={`${activePage === 'login' ? 'current-page' : ''}`}>Log In</Link>
                    </>
                }
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