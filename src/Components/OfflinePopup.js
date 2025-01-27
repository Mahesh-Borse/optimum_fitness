import { Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';

const OfflinePopup = () => {
    const [isOffline, setIsOffline] = useState(!navigator.onLine);

    const handleOnline = () => {
        setIsOffline(false);
    };

    const handleOffline = () => {
        setIsOffline(true);
    };

    useEffect(() => {
        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        };
    }, []);

    if (!isOffline) return null;  // Don't render anything if online

    return (
        <div style={styles.popup} className='w-full bg-white text-gray-900 shadow-lg rounded-lg mx-4 mt-4 z-50'>
            <div className="flex items-center justify-between p-4">
                <Typography variant="h6" className="text-lg font-semibold">
                    You're currently offline
                </Typography>
            </div>
        </div>
    );
};

// Basic styles for the popup
const styles = {
    popup: {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        backgroundColor: '#7ebddd',
        color: 'white',
        textAlign: 'center',
        padding: '10px',
        fontSize: '16px',
        zIndex: '1000',
    },
};

export default OfflinePopup;
