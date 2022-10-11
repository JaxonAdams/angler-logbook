import React, { useEffect, useState } from 'react';
import { XCircleFill } from 'react-bootstrap-icons';
import auth from '../utils/auth';
import { useStoreContext } from '../utils/state/GlobalState';

// import components
import Header from '../components/Header';
import LogEntry from '../components/LogEntry';
import LogEntryForm from '../components/LogEntryForm';
import FilterEntryForm from '../components/FilterEntryForm';
import Footer from '../components/Footer';

const Dashboard = () => {
    // logged in user, set in useEffect hook
    // const [user, setUser] = useState({});
    const [logEntries, setLogEntries] = useState([]);
    // is the modal open? will be used to disable scroll when open
    const [isModalOpen, setIsModalOpen] = useState(false);

    // pull isMenuOpen from global store
    const [state] = useStoreContext();
    const { isMenuOpen } = state;

    // update page title
    useEffect(() => {
        document.title = 'Dashboard';
    }, []);

    // get user
    useEffect(() => {
        // send user to login page if not logged in
        if (!auth.isLoggedIn()) {
            window.location.assign('/login');
        };

        fetchData().then(({logEntries}) => {
            setLogEntries(logEntries);
        });
    }, []);

    // disable scroll if modal is open, if not open endable scroll
    useEffect(() => {
        isModalOpen ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'visible';
    }, [isModalOpen]);

    // format proper plural of user's name
    const formatWelcome = () => {
        // pull name from JWT
        const name = auth.getName().split(' ')[0];

        // format welcome based on first name
        return name[name.length - 1] === 's' ? `${name}' Fishing Log` : `${name}'s Fishing Log`;
    };

    // fetch user data
    const fetchData = async () => {
        // get user id from JWT
        const userId = auth.getId();

        try {
            const response = await fetch(`/api/users/${userId}`);
            const data = await response.json();

            return { ...data };
        } catch (err) {
            console.log(err);
        };
    };

    const openFormModal = () => {
		const modal = document.getElementById('newEntryModal'); 
		modal.showModal();
        setIsModalOpen(true);
    };

    const closeFormModal = () => {
		const modal = document.getElementById('newEntryModal'); 
		modal.setAttribute('closing', true);

		modal.addEventListener('animationend', () => {
			modal.removeAttribute('closing');
			modal.close();
            setIsModalOpen(false);
		}, { once: true });
    };

    const openFilterModal = () => {
        const modal = document.getElementById('filterEntryModal');
        modal.showModal();
        setIsModalOpen(true);
    };

    const closeFilterModal = () => {
        const modal = document.getElementById('filterEntryModal');
        modal.setAttribute('closing', true);

        modal.addEventListener('animationend', () => {
            modal.removeAttribute('closing');
            modal.close();
            setIsModalOpen(false);
        }, { once: true });
    };

    return (
        <div className={`dashboard ${isMenuOpen ? 'noscroll' : ''}`}>
            <Header />
            <div className='open-modal-container'>
                <button className='btn-link open-modal' onClick={() => openFormModal()}>New Log Entry</button>
                <button className='btn-link open-modal' onClick={() => openFilterModal()}>Filter Entries</button>
            </div>
            <h1 className='dashboard-title'>{formatWelcome()}</h1>
            <div className='entry-container'>
               {/* sort entries by date, then render LogEntry for each entry */} 
                {logEntries ? logEntries.slice(0).reverse().map(entry => {
                    return <LogEntry entry={entry} key={entry._id} />;
                })
                :
                    <p className='form-txt'>Loading...</p>
                }
            </div>
            <dialog id='newEntryModal'>
                <div className='close-btn-container'>
                    <p className='modal-title'>New Log Entry</p>
                    <XCircleFill className='modal-close' onClick={() => closeFormModal()} />
                </div>
                <LogEntryForm closeFormModal={closeFormModal} fetchData={fetchData} setLogEntries={setLogEntries} />
            </dialog>
            <dialog id='filterEntryModal'>
                <div className='close-btn-container'>
                    <p className='modal-title'>Apply Filter</p>
                    <XCircleFill className='modal-close' onClick={() => closeFilterModal()} />
                </div>
                <FilterEntryForm closeFilterModal={closeFilterModal} setLogEntries={setLogEntries} />
            </dialog>
            {/* I only want the footer to display once logs have loaded */}
            {logEntries && <Footer />}
        </div>
    );
};

export default Dashboard;
