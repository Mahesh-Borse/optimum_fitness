import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import './App.css';
// import Navbar from './Components/Navbar';
// import Footer from './Components/Footer';
// import Home from './pages/Home';
// import ExerciseDetailsPage from './Components/exercise/ExerciseDetailsPage';
const ScreenLoader = lazy(() => import('./Components/ScreenLoader'));
const Navbar = lazy(() => import('./Components/Navbar'));
const Home = lazy(() => import('./pages/Home'));
const ExerciseDetailsPage = lazy(() => import('./Components/exercise/ExerciseDetailsPage'));

const math = {
    lerp: (a, b, n) => (1 - n) * a + n * b,
};

class Cursor {
    constructor() {
        this.cursorEl = document.querySelector('[data-cursor]');
        this.trailEl = document.querySelector('[data-cursor-trail]');
        this.stickies = [...document.querySelectorAll('[data-stick-cursor]')];

        this.data = {
            mouse: { x: 0, y: 0 },
            cursor: { x: 0, y: 0 },
            trail: { x: 0, y: 0 },
            cursorEase: 0.08,
            trailEase: 0.04,
        };

        this.run = this.run.bind(this);
        this.mousePos = this.mousePos.bind(this);
        this.checkHoverState = this.checkHoverState.bind(this);

        this.init();
    }

    mousePos(e) {
        this.data.mouse.x = e.clientX;
        this.data.mouse.y = e.clientY;
    }

    checkHoverState() {
        const elements = document.elementsFromPoint(this.data.mouse.x, this.data.mouse.y);

        const isHoveringClickable = elements.some((el) =>
            ["A", "BUTTON", "INPUT", "TEXTAREA", "SELECT"].includes(el.tagName) ||
            el.hasAttribute("data-stick-cursor")
        );

        if (isHoveringClickable) {
            this.cursorEl.classList.add("cursor-pointer");
        } else {
            this.cursorEl.classList.remove("cursor-pointer");
        }
    }

    run() {
        // Cursor smooth movement
        this.data.cursor.x = math.lerp(this.data.cursor.x, this.data.mouse.x, this.data.cursorEase);
        this.data.cursor.y = math.lerp(this.data.cursor.y, this.data.mouse.y, this.data.cursorEase);

        // Trail smooth movement
        this.data.trail.x = math.lerp(this.data.trail.x, this.data.mouse.x, this.data.trailEase);
        this.data.trail.y = math.lerp(this.data.trail.y, this.data.mouse.y, this.data.trailEase);

        // Update cursor positions
        this.cursorEl.style.top = `${this.data.cursor.y}px`;
        this.cursorEl.style.left = `${this.data.cursor.x}px`;

        this.trailEl.style.top = `${this.data.trail.y}px`;
        this.trailEl.style.left = `${this.data.trail.x}px`;

        this.checkHoverState();
        requestAnimationFrame(this.run);
    }

    addListeners() {
        window.addEventListener("mousemove", this.mousePos, { passive: true });
    }

    init() {
        this.addListeners();
        this.run();
    }
}
const App = () => {

    setTimeout(() => {
        new Cursor();
    }, 1000);

    return (
        <Box width='400psx' sx={{ width: { xl: '1488px' } }} m='auto'>
            <div class="cursor" data-cursor>
                <div></div>
            </div>
            <div class="cursor-trail" data-cursor-trail></div>
            <Suspense fallback={() => ScreenLoader}>
                <Navbar />
                <Routes>
                    <Route path='/optimum_fitness' element={<Home />} />
                    <Route path='/optimum_fitness/exercises/:id' element={<ExerciseDetailsPage />} />
                </Routes>
                {/* <Footer /> */}
            </Suspense>
        </Box>
    )
}

export default App