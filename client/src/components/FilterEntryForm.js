import React from 'react';

const FilterEntryForm = ({ closeFilterModal, setLogEntries }) => {
    return (
        <form className='log-entry-form filter-entry-form'>
            <p className='form-txt'>Filter Your Log Entries</p>
            <input 
                className='entry-form-input'
                type='text'
                name='location'
                placeholder='Location'
            />
            <div>
                <label htmlFor='date'>Date Caught: </label>
                <input 
                    className='entry-form-input'
                    type='date'
                    name='date'
                />
            </div>
        </form>
    );
};

export default FilterEntryForm;