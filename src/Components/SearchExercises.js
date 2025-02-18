import React, { useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { primaryColor, exercisedbURL } from '../constants';
import HorizontalCardScrollbar from './HorizontalCardScrollbar';
import ScreenLoader from './ScreenLoader';
import { useQuery } from '@tanstack/react-query';
import { fetchData, exerciseOptions } from '../utils/fetchData';

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
    const [search, setSearch] = useState('');

    // Fetching body parts
    const { data: bodyParts, isLoading, error } = useQuery({
        queryKey: ['bodyParts'],
        queryFn: () => fetchData(`${exercisedbURL}/exercises/bodyPartList`, exerciseOptions, 100),
    });

    // Handle the search operation
    const handleSearch = async () => {
        if (search) {
            const exercisesData = await fetchData(`${exercisedbURL}/exercises`, exerciseOptions, 100);
            try {
                const searchResultExercises = exercisesData.filter((exercise) =>
                    exercise.name.toLowerCase().includes(search.toLowerCase()) ||
                    exercise.target.toLowerCase().includes(search) ||
                    exercise.equipment.toLowerCase().includes(search) ||
                    exercise.bodyPart.toLowerCase().includes(search)
                );
                setSearch(''); // clear search field
                setExercises(searchResultExercises); // setting the response data
            } catch (error) {
                console.error("Error while searching exercises:", error);
            }
        }
    };

    return (
        <Stack alignItems="center" sx={{ mt: { lg: '35px', md: '200px', xs: '0px' } }} justifyContent="center" p="20px">
            <Typography
                fontWeight={700}
                sx={{ fontSize: { lg: '35px', xs: '25px' }, textAlign: 'center' }}
                mb="50px"
            >
                Exercises That Will Elevate Your Fitness Journey
            </Typography>

            <Box position="relative" mb="72px">
                <TextField
                    sx={{
                        input: {
                            fontWeight: '700',
                            border: 'none',
                            borderRadius: '4px',
                        },
                        width: { lg: '800px', md: '700px', xs: '350px' },
                        backgroundColor: '#fff',
                    }}
                    height="76px"
                    value={search}
                    onChange={(e) => setSearch(e.target.value.toLowerCase())}
                    placeholder="Search Exercises"
                    type="text"
                />
                <Button
                    className="search-btn"
                    sx={{
                        bgcolor: primaryColor,
                        color: '#fff',
                        textTransform: 'none',
                        width: { lg: "175px", xs: '80px' },
                        fontSize: { lg: "20px", xs: '14px' },
                        height: '56px',
                        position: 'absolute',
                        right: '0',
                        top: '0',
                    }}
                    onClick={handleSearch}
                >
                    Search
                </Button>
            </Box>

            {/* Loading and error handling */}
            {isLoading ? (
                <ScreenLoader message="Please wait while loading..." />
            ) : error ? (
                <Box sx={{ color: 'red', textAlign: 'center' }}>
                    <Typography variant="h6">Error: {error.message}</Typography>
                    <Typography variant="body2">Please try again later.</Typography>
                </Box>
            ) : (
                <Box sx={{ position: 'relative', width: '100%', p: '20px', height: '80px' }}>
                    {bodyParts && (
                        <HorizontalCardScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} />
                    )}
                </Box>
            )}
        </Stack>
    );
};

export default SearchExercises;
