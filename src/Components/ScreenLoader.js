import React from 'react';
import { Typography, Box } from '@mui/material';
import '../../src/App.css'


const ScreenLoader = ({ message = "Loading..." }) => {
    return (

        <Box className="loading-container" >
            <div className="spinner"></div>
            <Typography fontWeight={700} sx={{ fontSize: { lg: '20x', xs: '15px' } }} m='10px' textAlign='center'>{message}</Typography>
        </Box>
    );
};

export default ScreenLoader;
