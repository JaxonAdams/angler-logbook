import React from 'react';

const LogEntryForm = () => {
    return (
        <form className='log-entry-form'>
            <p className='form-txt'>Required Info:</p>
            <input className='entry-form-input' type='text' name='fish' placeholder='Fish Caught' />
            <input className='entry-form-input' type='text' name='lure' placeholder='Lure Used' />
            <div>
                <label htmlFor='date'>Date Caught: </label>
                <input className='entry-form-input' type='date' name='date' />
            </div>
            <p className='form-txt'>Additional Info: (Optional)</p>
            <div className='flex-row'>
                <input className='entry-form-input form-input-sm' type='text' name='airTemp' placeholder='Air Temperature' />
                <input className='entry-form-input form-input-sm' type='text' name='waterTemp' placeholder='Water Temperature' />
            </div>
            <div className='flex-row'>
                <input className='entry-form-input form-input-sm' type='text' name='length' placeholder='Fish Length' />
                <input className='entry-form-input form-input-sm' type='text' name='weight' placeholder='Fish Weight' />
            </div>
            <input className='entry-form-input' type='text' name='other' placeholder='Other Info (250 char limit)' />
            <button className='submit-btn entry-form-submit' type='submit'>Submit</button>
        </form>
    );
};

export default LogEntryForm;
