import React, { useState } from 'react';

const FilterEntryForm = ({ closeFilterModal, logEntries, setFilteredEntries }) => {
    const [appliedFilters, setAppliedFilters] = useState({ location: '', date: '', fish: '', lure: '' });

    // format date to match date in logEntries obj
    const formatDate = date => {
        return date ? date.concat('T00:00:00.000Z') : '';
    };
    
    // filter logEntries array using appliedFilters state obj
    const filterList = () => {
        let filteredLogEntries = [ ...logEntries ];

        // use for...in statement to iterate over appliedFilters obj
        for (const filterField in appliedFilters) {
            // if key has truthy value...
            if (appliedFilters[filterField]) {
                // console.log(`${filterField}: ${appliedFilters[filterField]}`);

                filteredLogEntries = filteredLogEntries.filter(entry => {
                    return entry[filterField].trim().toLowerCase() === appliedFilters[filterField].trim().toLowerCase();
                });
            };
        };

        setFilteredEntries(filteredLogEntries);
    };

    const handleChange = e => {
        e.preventDefault();

        /* I want each date to match the format of dates in each log entry,    
        making sure they match now will make it easier to filter based on dates later */
        if (e.target.name === 'date') {
            const formattedDate = formatDate(e.target.value);
            return setAppliedFilters({ ...appliedFilters, date: formattedDate });
        };

        // set value in state object
        setAppliedFilters({ ...appliedFilters, [e.target.name]: e.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        
        filterList();

        closeFilterModal();
    };
    
    return (
        <form className='log-entry-form filter-entry-form' onSubmit={handleSubmit}>
            <p className='form-txt' style={{fontStyle: 'italic'}}>Display all entries whose fields match those below...</p>
            <input 
                className='entry-form-input'
                type='text'
                name='location'
                placeholder='Location'
                defaultValue={appliedFilters.location}
                onChange={handleChange}
            />
            <div>
                <label htmlFor='date'>Date Caught: </label>
                <input 
                    className='entry-form-input'
                    type='date'
                    name='date'
                    defaultValue={appliedFilters.date}
                    onChange={handleChange}
                />
            </div>
            <div className='flex-row'>
                <input 
                    className='form-input-sm entry-form-input'
                    type='text'
                    name='fish'
                    placeholder='Fish Caught'
                    defaultValue={appliedFilters.fish}
                    onChange={handleChange}
                />
                <input 
                    className='form-input-sm entry-form-input'
                    type='text'
                    name='lure'
                    placeholder='Lure Used'
                    defaultValue={appliedFilters.lure}
                    onChange={handleChange}
                />
            </div>
            <button className='submit-btn entry-form-submit' type='submit'>Apply Filter</button>
        </form>
    );
};

export default FilterEntryForm;