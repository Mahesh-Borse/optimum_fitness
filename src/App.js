import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import './App.css';
import Navbar from './Components/Navbar';
// import Footer from './Components/Footer';
import Home from './pages/Home';
import Exercise from './pages/Exercise';
import ExerciseDetailsPage from './Components/exercise/ExerciseDetailsPage';

const App = () => {
    return (
        <Box width='400psx' sx={{ width: { xl: '1488px' } }} m='auto'>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/exercises/:id' element={<ExerciseDetailsPage />} />
            </Routes>
            {/* <Footer /> */}
        </Box>
    )
}

export default App