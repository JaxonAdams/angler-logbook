import React, { useEffect, useState } from 'react';
import auth from '../utils/auth';

// import components
import Header from '../components/Header';

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
            <h1>{formatWelcome()}</h1>
        </div>
    );
};

export default Dashboard;
