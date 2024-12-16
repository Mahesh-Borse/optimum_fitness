import React from 'react';
import { Stack, Typography } from '@mui/material';
// import GymIcon from '../assets/icons/gym.png';
import { primaryColor } from '../constants';
const BodyPart = ({ item, setBodyPart, bodyPart }) => {
    // console.log("item from body part component----->", item);

    return (
        <>
            <Stack
                className='bodyPart-card' type='button' alignItems='center' justifyContent='center'
                sx={{
                    // border: item.item == 'all' ? `2px solid ${primaryColor}` : `1px solid ${primaryColor}`,
                    border: `${item === 'all' ? '2px' : '1px'} solid ${primaryColor}`,
                    borderTop: bodyPart === item ? `4px solid ${primaryColor}` : '',
                    borderBottom: bodyPart === item ? `4px solid ${primaryColor}` : '',
                    background: '#FFF',
                    borderBottomLeftRadius: '30px',
                    borderTopRightRadius: '30px',
                    width: '150px',
                    height: '100px',
                    cursor: 'pointer',
                    gap: '47px',
                }}
                onClick={() => {
                    // console.log(typeof setBodyPart);
                    setBodyPart(item);
                    window.scrollBy({ top: 1800, left: 100, behavior: 'smooth' });
                }}
            >
                {/* <image src={GymIcon} color='red' alt='dumbbell' style={{ with: '20px', height: '20px' }} /> */}
                <Typography textAlign='center' fontSize='27px' fontWeight='bold' color='#3a1212' textTransform='capitalize'>{item} </Typography>
            </Stack >
        </>
    )
}

export default BodyPart