import { Button, Stack, Typography } from '@mui/material';
// import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import React from 'react';
import { Link } from 'react-router-dom';


const ExerciseCard = ({ exercise }) => {
    return (
        // https://r2-us-west.photoai.com/1726214911-d55f02531cfa1ad2d5c6b3901a230793-4.png
        // https://r2-us-west.photoai.com/1714378677-e6dcd57a292ca06a0756e97fcd8c1b22-1.png

        <div>
            <Link to={`exercises/${exercise.id}`}
                className='exercise-card'>

                <img src={exercise.gifUrl} alt={exercise.name} loading='lazy' />


                <Stack direction='row' gap='6px' >
                    {/* <LocalOfferIcon style={{ color: "grey", fontSize: "20px" }} /> */}
                    <Typography
                        sx={{
                            padding: '3px 10px',
                            color: '#FFa9a9',
                            border: '2px solid #FFa9a9',
                            fontSize: '14px',
                            borderRadius: '10px',
                            textTransform: 'capitalize'
                        }}>
                        {exercise.bodyPart}
                    </Typography>
                    <Typography
                        sx={{
                            padding: '3px 10px',
                            color: '#Fcc757',
                            border: '2px solid #Fcc757',
                            fontSize: '14px',
                            borderRadius: '10px',
                            textTransform: 'capitalize'
                        }}>

                        {exercise.target}
                    </Typography>
                </Stack>
                <Typography
                    fontSize='15px'
                    alignContent='center'
                    textAlign='center'
                    color='#000'
                    fontWeight='bold'
                    mt='11px'
                    pb='10px'
                    textTransform='capitalize'>
                    {exercise.name}
                </Typography>
            </Link>
        </div>

    )
}

export default ExerciseCard