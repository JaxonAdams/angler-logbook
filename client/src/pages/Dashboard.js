import React, { useEffect, useState } from 'react';
import { XCircleFill } from 'react-bootstrap-icons';
import auth from '../utils/auth';

// import components
import Header from '../components/Header';
import LogEntry from '../components/LogEntry';
import LogEntryForm from '../components/LogEntryForm';
import Footer from '../components/Footer';

const Dashboard = () => {
    // logged in user, set in useEffect hook
    const [user, setUser] = useState({});

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

        // get user id from JWT
        const userId = auth.getId();

        // fetch user data
        const fetchData = async () => {
            try {
                const response = await fetch(`/api/users/${userId}`);
                const data = await response.json();

                return { ...data };
            } catch (err) {
                console.log(err);
            };
        };

        fetchData().then(data => {
            setUser(data);
        });
    }, []);

    useEffect(() => console.log(user), [user]);

    // format proper plural of user's name
    const formatWelcome = () => {
        // pull name from JWT
        const name = auth.getName().split(' ')[0];

        // format welcome based on first name
        return name[name.length - 1] === 's' ? `${name}' Fishing Log` : `${name}'s Fishing Log`;
    };

    const openFormModal = () => {
		const modal = document.getElementById('newEntryModal'); 
		modal.showModal();
    };

    const closeFormModal = () => {
		const modal = document.getElementById('newEntryModal'); 
		modal.setAttribute('closing', true);

		modal.addEventListener('animationend', () => {
			modal.removeAttribute('closing');
			modal.close();
		}, { once: true });
    };

    return (
        <div className='dashboard'>
            <Header />
            <div className='open-modal-container'>
                <button className='btn-link open-modal' onClick={() => openFormModal()}>New Log Entry</button>
            </div>
            <h1 className='dashboard-title'>{formatWelcome()}</h1>
            <div className='entry-container'>
               {/* sort entries by date, then render LogEntry for each entry */} 
                {user.logEntries ? user.logEntries.sort((a,b) => a.date < b.date).map(entry => {
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
                <LogEntryForm />
            </dialog>
            {/* I only want the footer to display once logs have loaded */}
            {user.logEntries && <Footer />}
        </div>
    );
};

export default Dashboard;
