import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import { primaryColor } from '../constants';

const Navbar = () => {
    return (
        <>
            <Stack direction='row' justifyContent='space-around' sx={
                {
                    gap: {
                        sm: '122px', xs: '40px'
                    }, mt: { sm: '32px', xs: '20px' },
                    justifyContent: 'none'
                }} px='20px'>
                {/* <Link to='/'>
                    <img src={Logo} alt='logo' style={{ width: '48px', height: '48px', margin: '0 20px' }} />
                </Link> */}
                <Stack direction='row' gap='40px' fontSize='24px' alignItems='flex-end'>
                    <Link to='/optimum_fitness' style={{ textDecoration: 'none', color: '#FFF', borderBottom: `3px solid ${primaryColor}` }}>Home</Link>
                    <a href='#exercises' style={{ textDecoration: 'none', color: '#FFF' }}>Exercises</a>
                </Stack>
            </Stack>
        </>
    )
}

export default Navbar