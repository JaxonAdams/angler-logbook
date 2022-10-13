import React, { useState, useEffect } from 'react';
import auth from '../utils/auth';

const LogEntryForm = ({ closeFormModal, fetchData, setLogEntries }) => {
    // form state obj
    // 'name' and 'userId' will be pulled from JWT on submit
    const [formState, setFormState] = useState({
        name: '',
        userId: '',
        location: '',
        fish: '',
        lure: '',
        date: '',
        airTemp: '',
        waterTemp: '',
        length: '',
        weight: '',
        other: ''
    });
    // error message state
    const [errorMessage, setErrorMessage] = useState('');

    // sign name and user id to formState
    useEffect(() => {
        const name = auth.getName();
        const userId = auth.getId();

        setFormState({ ...formState, name: name, userId: userId });
        // I will clean this up later; for now an empty dep array seems to work fine
        // eslint-disable-next-line
    }, []);

    const handleChange = e => {
        e.preventDefault();

        // set form state to input value
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();

        console.log(formState);

        // define function to send post fetch request to add log entry
        // will be called after validation
        const postData = async () => {
            const postResponse = await fetch('/api/logs', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                },
                body: JSON.stringify(formState)
            });

            if (!postResponse.ok) {
                return console.log('Error sending log entry...');
            };

            // close form modal
            closeFormModal();

            // refetch log entries and set them to display
            fetchData().then(({ logEntries }) => setLogEntries(logEntries));
        };

        // validation; first checking that 'other' is under char limit
        if (formState.other.length <= 250) {
            // check that formState includes required fields
            if (
                formState.userId
                && formState.name
                && formState.location
                && formState.lure
                && formState.fish
                && formState.date
            ) {
                setErrorMessage('');
                setFormState({
                    name: '',
                    userId: '',
                    location: '',
                    fish: '',
                    lure: '',
                    date: '',
                    airTemp: '',
                    waterTemp: '',
                    length: '',
                    weight: '',
                    other: ''
                });
                postData();
            } else {
                console.log('Error: Required fields left blank');
                setErrorMessage('Please fill in all required fields.');
            };
        } else {
            console.log('Error: Field "Other" exceeds character limit');
            setErrorMessage('Field "Other Info" exceeds character limit.');
        };
    };

    return (
        <form className='log-entry-form' onSubmit={handleSubmit}>
            {errorMessage && <p className='form-txt form-txt-sm'>{errorMessage}</p>}
            <p className='form-txt'>Required Info:</p>
            <input 
                className='entry-form-input'
                type='text'
                name='location'
                defaultValue={formState.location}
                placeholder='Location'
                onChange={handleChange}
            />
            <input 
                className='entry-form-input' 
                type='text' 
                name='fish' 
                defaultValue={formState.fish} 
                placeholder='Fish Caught'
                onChange={handleChange}
            />
            <input 
                className='entry-form-input' 
                type='text' 
                name='lure' 
                defaultValue={formState.lure} 
                placeholder='Lure Used'
                onChange={handleChange}
            />
            <div>
                <label htmlFor='date'>Date Caught: </label>
                <input 
                    className='entry-form-input' 
                    type='date' 
                    name='date' 
                    defaultValue={formState.date}
                    onChange={handleChange}
                />
            </div>
            <p className='form-txt'>Additional Info: (Optional)</p>
            <div className='flex-row'>
                <input 
                    className='entry-form-input form-input-sm' 
                    type='text' 
                    name='airTemp' 
                    defaultValue={formState.airTemp} 
                    placeholder='Air Temperature'
                    onChange={handleChange}
                />
                <input 
                    className='entry-form-input form-input-sm' 
                    type='text' 
                    name='waterTemp' 
                    defaultValue={formState.waterTemp} 
                    placeholder='Water Temperature'
                    onChange={handleChange}
                />
            </div>
            <div className='flex-row'>
                <input 
                    className='entry-form-input form-input-sm' 
                    type='text' 
                    name='length' 
                    defaultValue={formState.length} 
                    placeholder='Fish Length'
                    onChange={handleChange}
                />
                <input 
                    className='entry-form-input form-input-sm' 
                    type='text' 
                    name='weight' 
                    defaultValue={formState.weight} 
                    placeholder='Fish Weight'
                    onChange={handleChange}
                />
            </div>
            <input 
                className='entry-form-input' 
                type='text' 
                name='other' 
                defaultValue={formState.other} 
                placeholder='Other Info (250 char limit)'
                onChange={handleChange}
            />
            <button className='submit-btn entry-form-submit' type='submit'>Submit</button>
        </form>
    );
};

export default LogEntryForm;
