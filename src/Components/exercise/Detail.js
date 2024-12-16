import React from 'react';
import { Typography, Stack, Button } from '@mui/material';
// import BodyPartImage from '../../assets/icons/body-part.png'
// import TargetImage from '../../assets/icons/target.png'
// import EquipmentImage from '../../assets/icons/equipment.png'
import { primaryColorFade } from '../../constants';

const Detail = ({ exerciseDetail }) => {

    const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;
    const extraDetail = [
        {
            // icon: BodyPartImage,
            name: bodyPart
        },
        {
            // icon: TargetImage,
            name: target
        },
        {
            // icon: EquipmentImage,
            name: equipment
        },
    ];

    return (
        <Stack gap='60px' sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center' }}>
            <img key={gifUrl} src={gifUrl} alt={name} loading='lazy' className='detail-image' />
            <Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>
                <Typography variant='h4'>
                    {name}
                </Typography>
                <Typography variant='h6'>
                    Exercise keep you Strong. {name} is one of the
                    best exercise to target your {target}.
                </Typography>
                {extraDetail.map((item) => (
                    <Stack key={item.name} direction='row' gap="20px" alignItems='center'>
                        <Button sx={{ background: primaryColorFade, borderRadius: '20%', padding: '20px', hright: '100%' }}>
                            {/* <img src={item.icon} alt={item.name} /> */}
                        </Button>
                        <Typography variant='h5'>
                            {item.name}
                        </Typography>
                    </Stack>
                ))}
            </Stack>
        </Stack >
    )
}

export default Detail