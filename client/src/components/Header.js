import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
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
            <div className={`header-nav ${activePage === 'signup' && 'current-page'}`}>
                <Link to='/signup'>Sign Up</Link>
            </div>
        </header>
    );
};

export default Header;