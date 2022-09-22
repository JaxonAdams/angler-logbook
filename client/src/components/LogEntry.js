import React from 'react';

const LogEntry = ({ entry }) => {
    const formatDate = date => {
        console.log(date);
        const day = date.split('T')[0].split('-')[2];
        const month = date.split('T')[0].split('-')[1];
        const year = date.split('T')[0].split('-')[0];

        return `${month}/${day}/${year}`;
    };

    return (
        <div className='log-entry'>
            <p className='logged-name'>Caught by {entry.name} on {formatDate(entry.date)}</p>
        </div>
    );
};

export default LogEntry;
