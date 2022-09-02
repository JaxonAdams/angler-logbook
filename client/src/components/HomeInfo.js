import React from 'react';
import { GeoAltFill, ThermometerHalf, Inboxes, Rulers } from 'react-bootstrap-icons';

const HomeInfo = () => {
    return (
        <div className='home-info'>
            <h2 className='home-info-title'>We'll help you log...</h2>
            <div className='info-icon-container'>
                <div className='info-icon'>
                    <div className='icon-background'>
                        <GeoAltFill className='icon' />
                    </div>
                    <p className='info-txt'>Location</p>
                </div>
                <div className='info-icon'>
                    <div className='icon-background'>
                        <ThermometerHalf className='icon' />
                    </div>
                    <p className='info-txt'>Temperature</p>
                </div>
                <div className='info-icon'>
                    <div className='icon-background'>
                        <Inboxes className='icon' />
                    </div>
                    <p className='info-txt'>Tackle Used</p>
                </div>
                <div className='info-icon'>
                    <div className='icon-background'>
                        <Rulers className='icon' />
                    </div>
                    <p className='info-txt'>Fish Size</p>
                </div>
            </div>
        </div>
    );
};

export default HomeInfo;