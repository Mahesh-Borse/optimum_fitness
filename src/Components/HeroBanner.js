import { Box, Typography, Button } from '@mui/material';
import React from 'react';
import { primaryColor } from '../constants';

const HeroBanner = () => {
    return (
        <Box className="hero-banner-img" sx={{
            mt: { lg: '40px', xs: '70px' },
            ml: { sm: '50px' },
            mr: '0px',
            position: 'relative',
            p: '20px',
            display: 'block',
        }}>
            <Typography color={primaryColor} fontWeight={600} fontSize="26px">
                Muscle Mavericks Fitness Club
            </Typography>

            <Typography
                fontWeight={700}
                color={'white'}
                fontSize="30px"
                mb="15px"
                mt="20px"
                sx={{
                    fontSize: { lg: '44px', xs: '40px' }
                }}
            >
                Challenge Yourself,<br /> Redefine Limits
            </Typography>

            <Typography lineHeight="30px" mb="20px" fontSize="18px" color={primaryColor}>
                Unlock the Secrets to Effective Workouts
            </Typography>

            <Button
                className="explore-btn"
                color="error"
                href="#exercises"
                sx={{
                    backgroundColor: primaryColor,
                    pl: '20px',
                    py: '10px',
                    fontSize: { lg: '18px', xs: '14px' },
                }}
            >
                Explore Exercises
            </Button>
            <Typography

                fontWeight={600}
                color={primaryColor}
                sx={{
                    fontSize: { xs: 100, lg: 200 },
                    opacity: 0.5,
                    display: { lg: 'block' }
                }}
            >
                Muscle Mavericks
            </Typography>
        </Box>
    );
};

export default HeroBanner;
