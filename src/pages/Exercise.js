import React, { useState, useEffect } from 'react';
import Pagination from '@mui/material/Pagination';
import { Stack, Box, Typography } from '@mui/material';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import ExerciseCard from '../Components/exercise/ExerciseCard';
import ScreenLoader from '../Components/ScreenLoader';
import { exercisedbURL, primaryColor } from '../constants';

const Exercise = ({ exercises, bodyPart, setExercises, loading, setLoading }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const exercisesPerPage = 8;
    const indexOfLastExercise = currentPage * exercisesPerPage;
    const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
    const currentExercise = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

    useEffect(() => {
        setCurrentPage(1);
        const fetchExerciseData = async () => {
            let exercisesData = [];
            if (bodyPart === 'all') {

                exercisesData = await fetchData(
                    `${exercisedbURL}/exercises`,
                    exerciseOptions,
                    100,
                );
            } else {
                exercisesData = await fetchData(
                    `${exercisedbURL}/exercises/bodyPart/${bodyPart}`,
                    exerciseOptions,
                    100,
                );

            }
            setExercises(exercisesData);
        };

        fetchExerciseData();
    }, [bodyPart]);



    const handlePagination = (e, value) => {
        setCurrentPage(value);
        window.scrollTo({ top: 1300, behavior: 'smooth' })
    };
    return (
        loading
            ? <ScreenLoader message="Please wait while loading exercises..." />
            : <Box
                id='exercises'
                // border=' 1px solid #80808070'
                sx={{ mt: { lg: '50px' } }}
                m='10px 50px' p='20px'
            >
                {exercises.length < 1
                    ? <Typography
                        variant='h6'
                        alignContent='center'
                        textAlign='center'
                        color={primaryColor}
                        mt='11px'
                        pb='10px'
                        textTransform='capitalize'>
                        No results found. Try with different keywords.
                    </Typography>
                    : <div>
                        <Typography variant='h6' mb='46px' textAlign='center'>
                            Showing results ({exercises.length})
                        </Typography>
                        <Stack
                            direction='row'
                            sx={{ gap: { lg: '50px', xs: '30px' } }}
                            flexWrap='wrap' justifyContent='center'>
                            {currentExercise.map((exercise, index) =>
                                <ExerciseCard key={index} exercise={exercise} />
                            )}
                        </Stack>
                        {exercises.length > 9 && (
                            <Box justifyItems='center'>
                                <Pagination
                                    sx={{ mt: '40px' }}
                                    color='standard'
                                    shape='rounded'
                                    defaultPage={1}
                                    count={Math.ceil(exercises.length / exercisesPerPage)}
                                    page={currentPage}
                                    onChange={handlePagination}
                                    size='large'
                                >
                                </Pagination>
                            </Box>
                        )}
                    </div>}
            </Box>

    );
}

export default Exercise