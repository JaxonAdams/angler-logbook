import React, { useEffect, useState } from 'react';
import auth from '../utils/auth';

// import components
import Header from '../components/Header';
import LogEntry from '../components/LogEntry';

const Dashboard = () => {
    // logged in user, set in useEffect hook
    const [user, setUser] = useState({});

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

    // should name have "'s" or single "'"
    const formatWelcome = () => {
        // user data may not have fetched yet; if not, do not try to format
        if (user.name) {

            const lastLetter = user.name.split('')[user.name.length - 1];

            if (lastLetter === 's' || lastLetter === 'S') {
                return `${user.name}' Fishing Log`;
            };

            return `${user.name}'s Fishing Log`;
        };
    };

    return (
        <div className='dashboard'>
            <Header />
            <h1 className='dashboard-title'>{formatWelcome()}</h1>
            <div className='entry-container'>
               {/* sort entries by date, then render LogEntry for each entry */} 
                {user.logEntries && user.logEntries.sort((a,b) => a.date < b.date).map(entry => {
                    return <LogEntry entry={entry} key={entry._id} />;
                })}
            </div>
        </div>
    );
};

export default Dashboard;
