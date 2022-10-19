import React, { useState, useEffect } from 'react';
import { useStoreContext } from '../utils/state/GlobalState';

import Header from '../components/Header';
import LogEntry from '../components/LogEntry';

const ViewAll = () => {
    // log entries array, set in useEffect hook
    const [logEntries, setLogEntries] = useState([]);

    // pull isMenuOpen from global store
    const [state] = useStoreContext();
    const { isMenuOpen } = state;

    // update title
    useEffect(() => {
        document.title = 'Recently Caught';
    }, []);

    // get log entries
    useEffect(() => {
        // fetch logs via api then set to state
        fetchLogs().then((logEntries) => setLogEntries(logEntries));
    }, []);

    const fetchLogs = async () => {
        try {
            const response = await fetch('/api/logs');
            const data = await response.json();

            return [ ...data ];
        } catch (e) {
            console.log(e);
        };
    };

    return (
        <div className={`view-all ${isMenuOpen ? 'noscroll' : ''}`}>
            <Header />
            <h1 className='view-all-title'>Recently Caught Fish</h1>
            <div className='entry-container'>
                {/* sort all entries by date, then render LogEntry for each */}
                {logEntries.length ? logEntries.map(entry => {
                    return <LogEntry entry={entry} key={entry._id} />
                })
                :
                <p className='form-txt'>Loading...</p>    
            }
            </div>  
        </div>
    );
};

export default ViewAll;