import React from 'react';
import { useState } from 'react';
import { Box } from '@mui/material';
import Exercise from './Exercise';
import SearchExercises from '../Components/SearchExercises';
import HeroBanner from '../Components/HeroBanner';


const Home = () => {

    const [bodyPart, setBodyPart] = useState('all');
    const [exercises, setExercises] = useState([]);
    const [loading, setLoading] = useState(false);

    return (
        <Box>
            <HeroBanner />
            <SearchExercises
                setExercises={setExercises}
                bodyPart={bodyPart}
                setBodyPart={setBodyPart}
            />
            <Exercise
                exercises={exercises}
                setExercises={setExercises}
                // setBodyPart={setBodyPart}
                bodyPart={bodyPart}
                loading={loading}
                setLoading={setLoading}
            />
        </Box>
    )
}

export default Home