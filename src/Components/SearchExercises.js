import React, { useState, useEffect } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import { primaryColor, exercisedbURL } from '../constants';
import HorizontalCardScrollbar from './HorizontalCardScrollbar';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import ScreenLoader from './ScreenLoader'
import useFetchData from '../Hooks/useFetchData';
import { useLocalStorage } from '../Hooks/useLocalStorage';

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {

    const [search, setSearch] = useState('');
    const [bodyParts, setBodyParts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchExerciseData = async () => {

            const bodyPartsData = await fetchData(
                `${exercisedbURL}/exercises/bodyPartList`,
                exerciseOptions,
                100,
            );

            if (bodyPartsData !== null && bodyPartsData.length > 0) {
                setBodyParts(['all', ...bodyPartsData]);
            } else {
            }
        };
        if (bodyParts.length === 0) { // fetch only once
            fetchExerciseData();
        }
    }, []);

    // const [localData, setLocalData] = useLocalStorage('exercise', [1, 2, 3])
    // console.log("localData : ", localData);


    // const [data, loading, error] = useFetchData("exercise", `${exercisedbURL}/exercises/bodyPartList`,);

    const handleSearch = async () => {

        //setLocalData((previousData) => [...previousData, 4, 5, 6]);
        if (search) {
            setLoading(true);
            const exercisesData = await fetchData(
                `${exercisedbURL}/exercises`,
                exerciseOptions,
                100,
            );
            try {
                const searchResusltExercises = exercisesData.filter(
                    (exercise) => exercise.name.toLowerCase().includes(search.toLowerCase()) ||
                        exercise.target.toLowerCase().includes(search) ||
                        exercise.equipment.toLowerCase().includes(search) ||
                        exercise.bodyPart.toLowerCase().includes(search)
                );
                setSearch(''); // clear search field 

                setExercises(searchResusltExercises); // setting the response data
                setLoading(false);
            } catch (error) {
                console.error("error searchResusltExercises -------->", error);
                setLoading(false);
            }
        }
    };



    return (
        <Stack alignItems='center' mt='37px' justifyContent='center' p='20px'>
            <Typography fontWeight={700} sx={{ fontSize: { lg: '35x', xs: '25px' } }} mb='50px' textAlign='center'>
                {/* Awesome exercises youshould know */}
                Exercises That Will Elevate Your Fitness Journey
                {/* : {localData} */}
            </Typography>
            <Box position='relative' mb='72px'>
                <TextField
                    sx={{
                        input: {
                            fontWeight: '700',
                            border: 'none',
                            borderRadius: '4px'
                        },
                        width: { lg: '800px', md: '700px', xs: '350px' },
                        backgroundColor: '#fff',
                        borderRadiusa: '40px',
                    }}
                    height='76px'
                    value={search}
                    onChange={(e) => setSearch(e.target.value.toLowerCase())}
                    placeholder='Search Exercises'
                    type='text'
                />
                <Button className='search-btn'
                    sx={{
                        bgcolor: primaryColor,
                        color: '#fff',
                        textTransform: 'none',
                        width: { lg: "175px", xs: '80px' },
                        fontSize: { lg: "20px", xs: '14px' },
                        height: '56px',
                        position: 'absolute',
                        right: '0'
                    }}
                    onClick={handleSearch}>
                    Search
                </Button>
            </Box>
            {loading
                ? <ScreenLoader message="Please wait while loading..." />
                : <Box sx={{ position: 'relative', width: '100%', p: '20px', height: '80px' }}>
                    <HorizontalCardScrollbar
                        data={bodyParts}
                        bodyPart={bodyPart}
                        setBodyPart={setBodyPart}
                    />

                </Box>
            }
        </Stack>
    )
}

export default SearchExercises