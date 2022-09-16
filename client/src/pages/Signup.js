import React, { useEffect } from 'react';

import { useStoreContext } from '../utils/state/GlobalState';

import Header from '../components/Header';
import SignupForm from '../components/SignupForm';

const Signup = ({ menuOpen, setMenuOpen }) => {
    useEffect(() => {
        document.title = 'Sign Up';
    }, []);

    const [state] = useStoreContext();
    const { isMenuOpen } = state;

    return (
        <div className={`signup ${isMenuOpen ? 'noscroll' : ''}`}>
            <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <div className='signup-container'>
                <SignupForm />
                <div className='signup-img' />
            </div>
        </div>
    );
};

export default Signup;
