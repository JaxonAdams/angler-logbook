import React, { useState, useEffect } from 'react';
import { useStoreContext } from '../utils/state/GlobalState';
import { XCircleFill } from 'react-bootstrap-icons';

import Header from '../components/Header';
import LogEntry from '../components/LogEntry';
import FilterEntryForm from '../components/FilterEntryForm';

const ViewAll = () => {
    // log entries array, set in useEffect hook
    const [logEntries, setLogEntries] = useState([]);
    // filtered array
    const [filteredEntries, setFilteredEntries] = useState([]);
    // is modal open? used to disable scroll
    const [isModalOpen, setIsModalOpen] = useState(false);

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

    // disable scroll if modal is open, if not open endable scroll
    useEffect(() => {
        isModalOpen ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'visible';
    }, [isModalOpen]);

    // fetch all logs
    const fetchLogs = async () => {
        try {
            const response = await fetch('/api/logs');
            const data = await response.json();

            return [ ...data ];
        } catch (e) {
            console.log(e);
        };
    };

    // handle filter modal open
    const openFilterModal = () => {
        const modal = document.getElementById('view-all-filter-modal');
        modal.showModal();
        setIsModalOpen(true);
    };

    // handle filter modal close w/ animation
    const closeFilterModal = () => {
        const modal = document.getElementById('view-all-filter-modal');
        modal.setAttribute('closing', true);

        modal.addEventListener('animationend', () => {
            modal.removeAttribute('closing');
            modal.close();
            setIsModalOpen(false);
        }, { once: true });
    };

    return (
        <div className={`view-all ${isMenuOpen ? 'noscroll' : ''}`}>
            <Header />
            <div className='open-modal-container'>
                <button className='btn-link open-modal view-all-open-modal' onClick={() => openFilterModal()}>Filter Entries</button>
            </div>
            <h1 className='view-all-title'>Recently Caught Fish</h1>
            <div className='entry-container'>
                {/* sort all entries by date, then render LogEntry for each */}
                {filteredEntries.length ? filteredEntries.map(entry => {
                    return <LogEntry entry={entry} key={entry._id} />
                })
                :
                    logEntries.length ? logEntries.map(entry => {
                        return <LogEntry entry={entry} key={entry._id} />
                    })
                    :
                    <p className='form-txt'>Loading...</p>
                }
            </div>
            <dialog id='view-all-filter-modal'>
                <div className='close-btn-container'>
                    <p className='modal-title'>Filter Entries</p>
                    <XCircleFill className='modal-close' onClick={() => closeFilterModal()} />
                </div>
                <FilterEntryForm currentPage='view-all' closeFilterModal={closeFilterModal} logEntries={logEntries} setFilteredEntries={setFilteredEntries} />
            </dialog>
        </div>
    );
};

export default ViewAll;