import { useState, Suspense, lazy } from 'react';
import { Box } from '@mui/material';
const ErrorBoundary = lazy(() => import('../utils/ErrorBoundary'));
const ScreenLoader = lazy(() => import('../Components/ScreenLoader'));
const VideoBackground = lazy(() => import('../Components/VideoBackground'));
const HeroBanner = lazy(() => import('../Components/HeroBanner'));
const SearchExercises = lazy(() => import('../Components/SearchExercises'));
const Exercise = lazy(() => import('./Exercise'));


const Home = () => {

    const [bodyPart, setBodyPart] = useState('all');
    const [exercises, setExercises] = useState([]);
    const [loading, setLoading] = useState(false);

    return (
        <Box>
            <ErrorBoundary>
                <Suspense fallback={<ScreenLoader />}>
                    <VideoBackground />
                    <HeroBanner />
                    <SearchExercises
                        setExercises={setExercises}
                        bodyPart={bodyPart}
                        setBodyPart={setBodyPart}
                    />
                    <Exercise
                        exercises={exercises}
                        setExercises={setExercises}
                        bodyPart={bodyPart}
                        loading={loading}
                        setLoading={setLoading}
                    />

                </Suspense>
            </ErrorBoundary>
        </Box>
    )
}

export default Home