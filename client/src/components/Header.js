import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

// custom useContext hook for manipulating state
import { useStoreContext } from '../utils/state/GlobalState';
// state actions
import { UPDATE_ACTIVE_PAGE, TOGGLE_NAV_MENU } from '../utils/state/actions';

import auth from '../utils/auth';

const Header = () => {
    // destructure useStoreContext() return value
    const [state, dispatch] = useStoreContext();
    // pull necessary values from global state object
    const { activePage, isMenuOpen } = state;

    // set activePage state
    useEffect(() => {
        const location = window.location.pathname.split('/')[1];
        // update global state with dispatch method
        dispatch({
            type: UPDATE_ACTIVE_PAGE,
            activePage: location
        });
    }, [dispatch]);

    const handleMenuOpen = () => {
        dispatch({
            type: TOGGLE_NAV_MENU,
            isMenuOpen: !isMenuOpen
        });
    };

    const handleLogout = e => {
        e.preventDefault();
        handleMenuOpen();
        auth.logout();
    };

    return (
        <header className='header'>
            <Link to='/'>
                <h1 className='header-title'>Angler's <span>Logbook</span></h1>
            </Link>
            <div className={`
                header-nav 
                ${isMenuOpen && 'show'}
            `}>
                {auth.isLoggedIn() ? 
                    <>
                        <Link to='/' onClick={handleLogout}>Logout</Link>
                        <p className='header-greeting'>Hello, <span>{auth.getName().split(' ')[0]}</span>!</p>
                    </>
                :
                    <>
                        <Link to='/signup' className={`${activePage === 'signup' ? 'current-page' : ''}`} onClick={handleMenuOpen}>Sign Up</Link>
                        <Link to='/login' className={`${activePage === 'login' ? 'current-page' : ''}`} onClick={handleMenuOpen}>Log In</Link>
                    </>
                }
            </div>
            <div className={`menu-btn ${isMenuOpen && 'close'}`} onClick={handleMenuOpen}>
                <div className='menu-line' />
                <div className='menu-line' />
                <div className='menu-line' />
            </div>
        </header>
    );
};

export default Header;
