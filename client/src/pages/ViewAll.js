import React, { useEffect } from 'react';

import Header from '../components/Header';

const ViewAll = () => {
    // update title
    useEffect(() => {
        document.title = 'Recently Caught';
    }, []);

    return (
        <div className='view-all'>
            <Header />
            Hello World
        </div>
    );
};

export default ViewAll;