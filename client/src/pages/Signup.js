import React from 'react';

import Header from '../components/Header';

const Signup = ({ menuOpen, setMenuOpen }) => {
    return (
        <div className='signup'>
            <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            Hello World
        </div>
    );
};

export default Signup;