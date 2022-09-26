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
            <div className='logged-info-container'>
                <p className='logged-info'>Fish: {entry.fish}</p>
                <p className='logged-info'>Lure: {entry.lure}</p>
            </div>
            <div className='additional-info-container'>
                <div className='flex-row'>
                    {entry.airTemp && <p className='logged-info'>Air Temperature: {entry.airTemp}</p>}
                    {entry.waterTemp && <p className='logged-info'>Water Temperature: {entry.waterTemp}</p>}
                </div>
                <div className='flex-row'>
                    {entry.length && <p className='logged-info'>Length: {entry.length}</p>}
                    {entry.weight && <p className='logged-info'>Weight: {entry.weight}</p>}
                </div>
                <div className='flex-row'>
                    {entry.other && <p className='logged-info logged-other'>{entry.other}</p>}
                </div>
            </div>
			<p className='logged-location'>Caught at {entry.location}</p>
        </div>
    );
};

export default LogEntry;
