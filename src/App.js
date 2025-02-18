import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import './App.css';
import { Cursor } from './utils/CustomeCursorAnimation';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const OfflinePopup = lazy(() => import('./Components/OfflinePopup'));
const ScreenLoader = lazy(() => import('./Components/ScreenLoader'));
const Home = lazy(() => import('./pages/Home'));
const ExerciseDetailsPage = lazy(() => import('./Components/exercise/ExerciseDetailsPage'));

// const Navbar = lazy(() => import('./Components/Navbar'));


const App = () => {

    setTimeout(() => {
        new Cursor();
    }, 1000);

    const queryClient = new QueryClient();

    return (
        <>
            <QueryClientProvider client={queryClient}>
                <Box width='400psx' sx={{ width: { xl: '1488px' } }} m='auto'>
                    <OfflinePopup />
                    <div className="cursor" data-cursor>
                        <div></div>
                    </div>
                    <div className="cursor-trail" data-cursor-trail></div>
                    <Suspense fallback={() => ScreenLoader}>
                        {/* <Navbar /> */}
                        <Routes>
                            <Route path='/optimum_fitness' element={<Home />} />
                            <Route path='/optimum_fitness/exercises/:id' element={<ExerciseDetailsPage />} />
                        </Routes>
                        {/* <Footer /> */}

                    </Suspense>
                </Box>
            </QueryClientProvider>
        </>
    )
}

export default App