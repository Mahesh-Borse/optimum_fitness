import React, { useState, useEffect } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import { primaryColor, exercisedbURL } from '../constants';
import HorizontalCardScrollbar from './HorizontalCardScrollbar';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import ScreenLoader from './ScreenLoader'

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
                console.error('------------------------------------------------------------- no bodyParts data found');
            }
        };
        if (bodyParts.length === 0) { // fetch only once
            fetchExerciseData();
        }
    }, []);
    // passed empty array to load this data when this component loads 
    // const staticData = [
    //     {
    //         "bodyPart": "waist",
    //         "equipment": "body weight",
    //         "gifUrl": "https://v2.exercisedb.io/image/KqP-kTN5wMHcAh",
    //         "id": "0001",
    //         "name": "3/4 sit-up",
    //         "target": "abs",
    //         "secondaryMuscles": [
    //             "hip flexors",
    //             "lower back"
    //         ],
    //         "instructions": [
    //             "Lie flat on your back with your knees bent and feet flat on the ground.",
    //             "Place your hands behind your head with your elbows pointing outwards.",
    //             "Engaging your abs, slowly lift your upper body off the ground, curling forward until your torso is at a 45-degree angle.",
    //             "Pause for a moment at the top, then slowly lower your upper body back down to the starting position.",
    //             "Repeat for the desired number of repetitions."
    //         ]
    //     },
    //     {
    //         "bodyPart": "waist",
    //         "equipment": "body weight",
    //         "gifUrl": "https://v2.exercisedb.io/image/SQy7rkBX3bnr-W",
    //         "id": "0002",
    //         "name": "45° side bend",
    //         "target": "abs",
    //         "secondaryMuscles": [
    //             "obliques"
    //         ],
    //         "instructions": [
    //             "Stand with your feet shoulder-width apart and your arms extended straight down by your sides.",
    //             "Keeping your back straight and your core engaged, slowly bend your torso to one side, lowering your hand towards your knee.",
    //             "Pause for a moment at the bottom, then slowly return to the starting position.",
    //             "Repeat on the other side.",
    //             "Continue alternating sides for the desired number of repetitions."
    //         ]
    //     },
    //     {
    //         "bodyPart": "waist",
    //         "equipment": "body weight",
    //         "gifUrl": "https://v2.exercisedb.io/image/94hF4KXnuqjkob",
    //         "id": "0003",
    //         "name": "air bike",
    //         "target": "abs",
    //         "secondaryMuscles": [
    //             "hip flexors"
    //         ],
    //         "instructions": [
    //             "Lie flat on your back with your hands placed behind your head.",
    //             "Lift your legs off the ground and bend your knees at a 90-degree angle.",
    //             "Bring your right elbow towards your left knee while simultaneously straightening your right leg.",
    //             "Return to the starting position and repeat the movement on the opposite side, bringing your left elbow towards your right knee while straightening your left leg.",
    //             "Continue alternating sides in a pedaling motion for the desired number of repetitions."
    //         ]
    //     },
    //     {
    //         "bodyPart": "upper legs",
    //         "equipment": "body weight",
    //         "gifUrl": "https://v2.exercisedb.io/image/Zmmh7tYFr-Khbb",
    //         "id": "1512",
    //         "name": "all fours squad stretch",
    //         "target": "quads",
    //         "secondaryMuscles": [
    //             "hamstrings",
    //             "glutes"
    //         ],
    //         "instructions": [
    //             "Start on all fours with your hands directly under your shoulders and your knees directly under your hips.",
    //             "Extend one leg straight back, keeping your knee bent and your foot flexed.",
    //             "Slowly lower your hips towards the ground, feeling a stretch in your quads.",
    //             "Hold this position for 20-30 seconds.",
    //             "Switch legs and repeat the stretch on the other side."
    //         ]
    //     },
    //     {
    //         "bodyPart": "waist",
    //         "equipment": "body weight",
    //         "gifUrl": "https://v2.exercisedb.io/image/Q3sgwGZNy2sdhf",
    //         "id": "0006",
    //         "name": "alternate heel touchers",
    //         "target": "abs",
    //         "secondaryMuscles": [
    //             "obliques"
    //         ],
    //         "instructions": [
    //             "Lie flat on your back with your knees bent and feet flat on the ground.",
    //             "Extend your arms straight out to the sides, parallel to the ground.",
    //             "Engaging your abs, lift your shoulders off the ground and reach your right hand towards your right heel.",
    //             "Return to the starting position and repeat on the left side, reaching your left hand towards your left heel.",
    //             "Continue alternating sides for the desired number of repetitions."
    //         ]
    //     },
    //     {
    //         "bodyPart": "back",
    //         "equipment": "cable",
    //         "gifUrl": "https://v2.exercisedb.io/image/rxzKrYjCnYVune",
    //         "id": "0007",
    //         "name": "alternate lateral pulldown",
    //         "target": "lats",
    //         "secondaryMuscles": [
    //             "biceps",
    //             "rhomboids"
    //         ],
    //         "instructions": [
    //             "Sit on the cable machine with your back straight and feet flat on the ground.",
    //             "Grasp the handles with an overhand grip, slightly wider than shoulder-width apart.",
    //             "Lean back slightly and pull the handles towards your chest, squeezing your shoulder blades together.",
    //             "Pause for a moment at the peak of the movement, then slowly release the handles back to the starting position.",
    //             "Repeat for the desired number of repetitions."
    //         ]
    //     },
    //     {
    //         "bodyPart": "lower legs",
    //         "equipment": "body weight",
    //         "gifUrl": "https://v2.exercisedb.io/image/DFenz-1iW0dFOP",
    //         "id": "1368",
    //         "name": "ankle circles",
    //         "target": "calves",
    //         "secondaryMuscles": [
    //             "ankle stabilizers"
    //         ],
    //         "instructions": [
    //             "Sit on the ground with your legs extended in front of you.",
    //             "Lift one leg off the ground and rotate your ankle in a circular motion.",
    //             "Perform the desired number of circles in one direction, then switch to the other direction.",
    //             "Repeat with the other leg."
    //         ]
    //     },
    //     {
    //         "bodyPart": "back",
    //         "equipment": "body weight",
    //         "gifUrl": "https://v2.exercisedb.io/image/qNg-0nqO99aZCx",
    //         "id": "3293",
    //         "name": "archer pull up",
    //         "target": "lats",
    //         "secondaryMuscles": [
    //             "biceps",
    //             "forearms"
    //         ],
    //         "instructions": [
    //             "Start by hanging from a pull-up bar with an overhand grip, slightly wider than shoulder-width apart.",
    //             "Engage your core and pull your shoulder blades down and back.",
    //             "As you pull yourself up, bend one arm and bring your elbow towards your side, while keeping the other arm straight.",
    //             "Continue pulling until your chin is above the bar and your bent arm is fully flexed.",
    //             "Lower yourself back down with control, straightening the bent arm and repeating the movement on the other side.",
    //             "Alternate sides with each repetition."
    //         ]
    //     },
    //     {
    //         "bodyPart": "chest",
    //         "equipment": "body weight",
    //         "gifUrl": "https://v2.exercisedb.io/image/32qTrzDBQb1Q04",
    //         "id": "3294",
    //         "name": "archer push up",
    //         "target": "pectorals",
    //         "secondaryMuscles": [
    //             "triceps",
    //             "shoulders",
    //             "core"
    //         ],
    //         "instructions": [
    //             "Start in a push-up position with your hands slightly wider than shoulder-width apart.",
    //             "Extend one arm straight out to the side, parallel to the ground.",
    //             "Lower your body by bending your elbows, keeping your back straight and core engaged.",
    //             "Push back up to the starting position.",
    //             "Repeat on the other side, extending the opposite arm out to the side.",
    //             "Continue alternating sides for the desired number of repetitions."
    //         ]
    //     },
    //     {
    //         "bodyPart": "waist",
    //         "equipment": "body weight",
    //         "gifUrl": "https://v2.exercisedb.io/image/wTZkdBANNK0e6Y",
    //         "id": "2355",
    //         "name": "arm slingers hanging bent knee legs",
    //         "target": "abs",
    //         "secondaryMuscles": [
    //             "shoulders",
    //             "back"
    //         ],
    //         "instructions": [
    //             "Hang from a pull-up bar with your arms fully extended and your knees bent at a 90-degree angle.",
    //             "Engage your core and lift your knees towards your chest, bringing them as close to your elbows as possible.",
    //             "Slowly lower your legs back down to the starting position.",
    //             "Repeat for the desired number of repetitions."
    //         ]
    //     },
    //     {
    //         "bodyPart": "waist",
    //         "equipment": "body weight",
    //         "gifUrl": "https://v2.exercisedb.io/image/inUhZb5pLOoT7N",
    //         "id": "2333",
    //         "name": "arm slingers hanging straight legs",
    //         "target": "abs",
    //         "secondaryMuscles": [
    //             "shoulders",
    //             "back"
    //         ],
    //         "instructions": [
    //             "Hang from a pull-up bar with your arms fully extended and your legs straight down.",
    //             "Engage your core and lift your legs up in front of you until they are parallel to the ground.",
    //             "Hold for a moment at the top, then slowly lower your legs back down to the starting position.",
    //             "Repeat for the desired number of repetitions."
    //         ]
    //     },
    //     {
    //         "bodyPart": "upper legs",
    //         "equipment": "body weight",
    //         "gifUrl": "https://v2.exercisedb.io/image/-6slF8BUKq37Rh",
    //         "id": "3214",
    //         "name": "arms apart circular toe touch (male)",
    //         "target": "glutes",
    //         "secondaryMuscles": [
    //             "hamstrings",
    //             "quadriceps",
    //             "calves"
    //         ],
    //         "instructions": [
    //             "Stand with your feet shoulder-width apart and arms extended to the sides.",
    //             "Keeping your legs straight, bend forward at the waist and reach down towards your toes with your right hand.",
    //             "As you reach down, simultaneously lift your left leg straight up behind you, maintaining balance.",
    //             "Return to the starting position and repeat the movement with your left hand reaching towards your toes and your right leg lifting up behind you.",
    //             "Continue alternating sides for the desired number of repetitions."
    //         ]
    //     },
    //     {
    //         "bodyPart": "waist",
    //         "equipment": "body weight",
    //         "gifUrl": "https://v2.exercisedb.io/image/y4rpBT5J1ri6ib",
    //         "id": "3204",
    //         "name": "arms overhead full sit-up (male)",
    //         "target": "abs",
    //         "secondaryMuscles": [
    //             "hip flexors",
    //             "lower back"
    //         ],
    //         "instructions": [
    //             "Lie flat on your back with your knees bent and feet flat on the ground.",
    //             "Extend your arms overhead, keeping them straight.",
    //             "Engaging your abs, slowly lift your upper body off the ground, curling forward until your torso is upright.",
    //             "Pause for a moment at the top, then slowly lower your upper body back down to the starting position.",
    //             "Repeat for the desired number of repetitions."
    //         ]
    //     },
    //     {
    //         "bodyPart": "chest",
    //         "equipment": "leverage machine",
    //         "gifUrl": "https://v2.exercisedb.io/image/i2h1cTF4kpFw0S",
    //         "id": "0009",
    //         "name": "assisted chest dip (kneeling)",
    //         "target": "pectorals",
    //         "secondaryMuscles": [
    //             "triceps",
    //             "shoulders"
    //         ],
    //         "instructions": [
    //             "Adjust the machine to your desired height and secure your knees on the pad.",
    //             "Grasp the handles with your palms facing down and your arms fully extended.",
    //             "Lower your body by bending your elbows until your upper arms are parallel to the floor.",
    //             "Pause for a moment, then push yourself back up to the starting position.",
    //             "Repeat for the desired number of repetitions."
    //         ]
    //     },
    //     {
    //         "bodyPart": "waist",
    //         "equipment": "assisted",
    //         "gifUrl": "https://v2.exercisedb.io/image/AwRMGtK-kBZIsP",
    //         "id": "0011",
    //         "name": "assisted hanging knee raise",
    //         "target": "abs",
    //         "secondaryMuscles": [
    //             "hip flexors"
    //         ],
    //         "instructions": [
    //             "Hang from a pull-up bar with your arms fully extended and your palms facing away from you.",
    //             "Engage your core muscles and lift your knees towards your chest, bending at the hips and knees.",
    //             "Pause for a moment at the top of the movement, squeezing your abs.",
    //             "Slowly lower your legs back down to the starting position.",
    //             "Repeat for the desired number of repetitions."
    //         ]
    //     },
    //     {
    //         "bodyPart": "waist",
    //         "equipment": "assisted",
    //         "gifUrl": "https://v2.exercisedb.io/image/GJfV4xh4wD2uPn",
    //         "id": "0010",
    //         "name": "assisted hanging knee raise with throw down",
    //         "target": "abs",
    //         "secondaryMuscles": [
    //             "hip flexors",
    //             "lower back"
    //         ],
    //         "instructions": [
    //             "Hang from a pull-up bar with your arms fully extended and your palms facing away from you.",
    //             "Engage your core and lift your knees towards your chest, keeping your legs together.",
    //             "Once your knees are at chest level, explosively throw your legs down towards the ground, extending them fully.",
    //             "Allow your legs to swing back up and repeat the movement for the desired number of repetitions."
    //         ]
    //     },
    //     {
    //         "bodyPart": "lower legs",
    //         "equipment": "assisted",
    //         "gifUrl": "https://v2.exercisedb.io/image/GSXouMHij54Bnf",
    //         "id": "1708",
    //         "name": "assisted lying calves stretch",
    //         "target": "calves",
    //         "secondaryMuscles": [
    //             "hamstrings"
    //         ],
    //         "instructions": [
    //             "Lie on your back with your legs extended.",
    //             "Bend one knee and place your foot flat on the ground.",
    //             "Using your hands or a towel, gently pull your toes towards your body, feeling a stretch in your calf.",
    //             "Hold the stretch for 20-30 seconds.",
    //             "Release the stretch and repeat on the other leg."
    //         ]
    //     },
    //     {
    //         "bodyPart": "upper legs",
    //         "equipment": "assisted",
    //         "gifUrl": "https://v2.exercisedb.io/image/iBGYC3vFK-InJI",
    //         "id": "1709",
    //         "name": "assisted lying glutes stretch",
    //         "target": "glutes",
    //         "secondaryMuscles": [
    //             "hamstrings"
    //         ],
    //         "instructions": [
    //             "Lie on your back with your legs extended.",
    //             "Bend your right knee and place your right ankle on your left thigh, just above the knee.",
    //             "Grasp your left thigh with both hands and gently pull it towards your chest.",
    //             "Hold the stretch for 20-30 seconds.",
    //             "Release and repeat on the other side."
    //         ]
    //     },
    //     {
    //         "bodyPart": "upper legs",
    //         "equipment": "assisted",
    //         "gifUrl": "https://v2.exercisedb.io/image/ILNU8AnudpvdR2",
    //         "id": "1710",
    //         "name": "assisted lying gluteus and piriformis stretch",
    //         "target": "glutes",
    //         "secondaryMuscles": [
    //             "hamstrings"
    //         ],
    //         "instructions": [
    //             "Lie on your back with your legs extended.",
    //             "Bend your right knee and place your right ankle on your left thigh, just above the knee.",
    //             "Grasp your left thigh with both hands and gently pull it towards your chest.",
    //             "Hold the stretch for 20-30 seconds.",
    //             "Release the stretch and repeat on the other side."
    //         ]
    //     },
    //     {
    //         "bodyPart": "waist",
    //         "equipment": "assisted",
    //         "gifUrl": "https://v2.exercisedb.io/image/FBlI-h3XuhI9Iu",
    //         "id": "0012",
    //         "name": "assisted lying leg raise with lateral throw down",
    //         "target": "abs",
    //         "secondaryMuscles": [
    //             "hip flexors",
    //             "obliques"
    //         ],
    //         "instructions": [
    //             "Lie flat on your back with your legs extended and your arms by your sides.",
    //             "Place your hands under your glutes for support.",
    //             "Engage your abs and lift your legs off the ground, keeping them straight.",
    //             "While keeping your legs together, lower them to one side until they are a few inches above the ground.",
    //             "Pause for a moment, then lift your legs back to the starting position.",
    //             "Repeat the movement to the other side.",
    //             "Continue alternating sides for the desired number of repetitions."
    //         ]
    //     },
    //     {
    //         "bodyPart": "waist",
    //         "equipment": "assisted",
    //         "gifUrl": "https://v2.exercisedb.io/image/LdOPi7-hmorpOh",
    //         "id": "0013",
    //         "name": "assisted lying leg raise with throw down",
    //         "target": "abs",
    //         "secondaryMuscles": [
    //             "hip flexors",
    //             "quadriceps"
    //         ],
    //         "instructions": [
    //             "Lie flat on your back with your legs extended and your arms by your sides.",
    //             "Place your hands under your glutes for support.",
    //             "Engage your core and lift your legs off the ground, keeping them straight.",
    //             "Raise your legs until they are perpendicular to the ground.",
    //             "Lower your legs back down to the starting position.",
    //             "Simultaneously, throw your legs down towards the ground, keeping them straight.",
    //             "Raise your legs back up to the starting position.",
    //             "Repeat for the desired number of repetitions."
    //         ]
    //     },
    //     {
    //         "bodyPart": "waist",
    //         "equipment": "medicine ball",
    //         "gifUrl": "https://v2.exercisedb.io/image/7AHEjM2CNwU0ac",
    //         "id": "0014",
    //         "name": "assisted motion russian twist",
    //         "target": "abs",
    //         "secondaryMuscles": [
    //             "obliques",
    //             "lower back"
    //         ],
    //         "instructions": [
    //             "Sit on the ground with your knees bent and feet flat on the floor.",
    //             "Hold the medicine ball with both hands in front of your chest.",
    //             "Lean back slightly, engaging your abs and keeping your back straight.",
    //             "Slowly twist your torso to the right, bringing the medicine ball towards the right side of your body.",
    //             "Pause for a moment, then twist your torso to the left, bringing the medicine ball towards the left side of your body.",
    //             "Continue alternating sides for the desired number of repetitions."
    //         ]
    //     },
    //     {
    //         "bodyPart": "back",
    //         "equipment": "leverage machine",
    //         "gifUrl": "https://v2.exercisedb.io/image/oaOItEPvjfQeuy",
    //         "id": "0015",
    //         "name": "assisted parallel close grip pull-up",
    //         "target": "lats",
    //         "secondaryMuscles": [
    //             "biceps",
    //             "forearms"
    //         ],
    //         "instructions": [
    //             "Adjust the machine to your desired weight and height.",
    //             "Place your hands on the parallel bars with a close grip, palms facing each other.",
    //             "Hang from the bars with your arms fully extended and your feet off the ground.",
    //             "Engage your back muscles and pull your body up towards the bars, keeping your elbows close to your body.",
    //             "Continue pulling until your chin is above the bars.",
    //             "Pause for a moment at the top, then slowly lower your body back down to the starting position.",
    //             "Repeat for the desired number of repetitions."
    //         ]
    //     },
    //     {
    //         "bodyPart": "upper legs",
    //         "equipment": "assisted",
    //         "gifUrl": "https://v2.exercisedb.io/image/y57wFZXao3AKkr",
    //         "id": "0016",
    //         "name": "assisted prone hamstring",
    //         "target": "hamstrings",
    //         "secondaryMuscles": [
    //             "glutes",
    //             "lower back"
    //         ],
    //         "instructions": [
    //             "Lie face down on a mat or bench with your legs fully extended.",
    //             "Have a partner or use a resistance band to secure your ankles.",
    //             "Engage your hamstrings and lift your legs towards your glutes, keeping your knees straight.",
    //             "Pause for a moment at the top, then slowly lower your legs back down to the starting position.",
    //             "Repeat for the desired number of repetitions."
    //         ]
    //     },
    //     {
    //         "bodyPart": "upper legs",
    //         "equipment": "assisted",
    //         "gifUrl": "https://v2.exercisedb.io/image/MFHhmZscAHFn5s",
    //         "id": "1713",
    //         "name": "assisted prone lying quads stretch",
    //         "target": "quads",
    //         "secondaryMuscles": [
    //             "hamstrings",
    //             "glutes"
    //         ],
    //         "instructions": [
    //             "Lie face down on the ground with your legs extended.",
    //             "Bend your left knee and reach back with your left hand to grab your left foot or ankle.",
    //             "Gently pull your left foot towards your glutes, feeling a stretch in your left quad.",
    //             "Hold the stretch for 20-30 seconds, then release.",
    //             "Repeat with your right leg."
    //         ]
    //     },
    //     {
    //         "bodyPart": "waist",
    //         "equipment": "assisted",
    //         "gifUrl": "https://v2.exercisedb.io/image/yrPvqFjMC9Nx85",
    //         "id": "1714",
    //         "name": "assisted prone rectus femoris stretch",
    //         "target": "abs",
    //         "secondaryMuscles": [
    //             "quadriceps"
    //         ],
    //         "instructions": [
    //             "Lie face down on the ground with your legs straight.",
    //             "Bend your right knee and reach back with your right hand to grab your right foot or ankle.",
    //             "Gently pull your right foot or ankle towards your glutes, feeling a stretch in the front of your right thigh.",
    //             "Hold the stretch for 20-30 seconds.",
    //             "Release and repeat on the other side."
    //         ]
    //     },
    //     {
    //         "bodyPart": "back",
    //         "equipment": "leverage machine",
    //         "gifUrl": "https://v2.exercisedb.io/image/aXxQ8i9yC18-jS",
    //         "id": "0017",
    //         "name": "assisted pull-up",
    //         "target": "lats",
    //         "secondaryMuscles": [
    //             "biceps",
    //             "forearms"
    //         ],
    //         "instructions": [
    //             "Adjust the machine to your desired weight and height settings.",
    //             "Grasp the handles with an overhand grip, slightly wider than shoulder-width apart.",
    //             "Hang with your arms fully extended and your feet off the ground.",
    //             "Engage your back muscles and pull your body up towards the handles, keeping your elbows close to your body.",
    //             "Continue pulling until your chin is above the handles.",
    //             "Pause for a moment at the top, then slowly lower your body back down to the starting position.",
    //             "Repeat for the desired number of repetitions."
    //         ]
    //     },
    //     {
    //         "bodyPart": "chest",
    //         "equipment": "assisted",
    //         "gifUrl": "https://v2.exercisedb.io/image/94WK1KtYybLa9T",
    //         "id": "1716",
    //         "name": "assisted seated pectoralis major stretch with stability ball",
    //         "target": "pectorals",
    //         "secondaryMuscles": [
    //             "shoulders",
    //             "triceps"
    //         ],
    //         "instructions": [
    //             "Sit on a stability ball with your feet flat on the ground and your back straight.",
    //             "Hold a stability ball with both hands and extend your arms straight out in front of you.",
    //             "Slowly lower the stability ball towards your chest, feeling a stretch in your pectoral muscles.",
    //             "Hold the stretch for a few seconds, then slowly return to the starting position.",
    //             "Repeat for the desired number of repetitions."
    //         ]
    //     },
    //     {
    //         "bodyPart": "upper legs",
    //         "equipment": "assisted",
    //         "gifUrl": "https://v2.exercisedb.io/image/rnx3dJUDHkedmM",
    //         "id": "1712",
    //         "name": "assisted side lying adductor stretch",
    //         "target": "adductors",
    //         "secondaryMuscles": [
    //             "hamstrings",
    //             "glutes"
    //         ],
    //         "instructions": [
    //             "Lie on your side with your legs straight and stacked on top of each other.",
    //             "Bend your bottom leg slightly for stability.",
    //             "Place your top foot on a stable surface, such as a bench or step.",
    //             "Keeping your top leg straight, slowly lower it towards the ground, feeling a stretch in your inner thigh.",
    //             "Hold the stretch for 20-30 seconds.",
    //             "Return to the starting position and repeat on the other side."
    //         ]
    //     },
    //     {
    //         "bodyPart": "waist",
    //         "equipment": "assisted",
    //         "gifUrl": "https://v2.exercisedb.io/image/sxOe1ozf3vUG6j",
    //         "id": "1758",
    //         "name": "assisted sit-up",
    //         "target": "abs",
    //         "secondaryMuscles": [
    //             "hip flexors"
    //         ],
    //         "instructions": [
    //             "Sit on the edge of a bench or have someone hold your feet down.",
    //             "Lie flat on your back with your knees bent and feet flat on the ground.",
    //             "Place your hands behind your head with your elbows pointing outwards.",
    //             "Engaging your abs, slowly lift your upper body off the ground, curling forward until your torso is at a 45-degree angle.",
    //             "Pause for a moment at the top, then slowly lower your upper body back down to the starting position.",
    //             "Repeat for the desired number of repetitions."
    //         ]
    //     },
    //     {
    //         "bodyPart": "back",
    //         "equipment": "leverage machine",
    //         "gifUrl": "https://v2.exercisedb.io/image/o8rrK2ctOk3wIw",
    //         "id": "1431",
    //         "name": "assisted standing chin-up",
    //         "target": "lats",
    //         "secondaryMuscles": [
    //             "biceps",
    //             "forearms"
    //         ],
    //         "instructions": [
    //             "Adjust the machine to your desired assistance level.",
    //             "Stand on the foot platform and grip the handles with an overhand grip, slightly wider than shoulder-width apart.",
    //             "Keep your chest up and shoulders back, engage your core, and slightly bend your knees.",
    //             "Pull your body up by flexing your elbows and driving your elbows down towards your sides.",
    //             "Continue pulling until your chin is above the bar.",
    //             "Pause for a moment at the top, then slowly lower your body back down to the starting position.",
    //             "Repeat for the desired number of repetitions."
    //         ]
    //     },
    //     {
    //         "bodyPart": "back",
    //         "equipment": "leverage machine",
    //         "gifUrl": "https://v2.exercisedb.io/image/qX7T1fI4ZCVkRR",
    //         "id": "1432",
    //         "name": "assisted standing pull-up",
    //         "target": "lats",
    //         "secondaryMuscles": [
    //             "biceps",
    //             "forearms"
    //         ],
    //         "instructions": [
    //             "Adjust the machine to your desired weight and height settings.",
    //             "Stand facing the machine with your feet shoulder-width apart.",
    //             "Grasp the handles with an overhand grip, slightly wider than shoulder-width apart.",
    //             "Engage your lats and biceps, and pull yourself up towards the handles.",
    //             "Pause for a moment at the top, squeezing your back muscles.",
    //             "Slowly lower yourself back down to the starting position.",
    //             "Repeat for the desired number of repetitions."
    //         ]
    //     },
    //     {
    //         "bodyPart": "upper arms",
    //         "equipment": "assisted",
    //         "gifUrl": "https://v2.exercisedb.io/image/g1lKKUqwQbK6JS",
    //         "id": "0018",
    //         "name": "assisted standing triceps extension (with towel)",
    //         "target": "triceps",
    //         "secondaryMuscles": [
    //             "shoulders"
    //         ],
    //         "instructions": [
    //             "Stand with your feet shoulder-width apart and hold a towel with both hands behind your head.",
    //             "Keep your elbows close to your ears and your upper arms stationary.",
    //             "Slowly extend your forearms upward, squeezing your triceps at the top.",
    //             "Pause for a moment, then slowly lower the towel back down to the starting position.",
    //             "Repeat for the desired number of repetitions."
    //         ]
    //     },
    //     {
    //         "bodyPart": "upper arms",
    //         "equipment": "leverage machine",
    //         "gifUrl": "https://v2.exercisedb.io/image/Q9-wbFXiuMAzaR",
    //         "id": "0019",
    //         "name": "assisted triceps dip (kneeling)",
    //         "target": "triceps",
    //         "secondaryMuscles": [
    //             "chest",
    //             "shoulders"
    //         ],
    //         "instructions": [
    //             "Adjust the machine to your desired weight and height.",
    //             "Kneel down on the pad facing the machine, with your hands gripping the handles.",
    //             "Lower your body by bending your elbows, keeping your back straight and close to the machine.",
    //             "Pause for a moment at the bottom, then push yourself back up to the starting position.",
    //             "Repeat for the desired number of repetitions."
    //         ]
    //     },
    //     {
    //         "bodyPart": "chest",
    //         "equipment": "leverage machine",
    //         "gifUrl": "https://v2.exercisedb.io/image/Dm0RzmEdh0JrtP",
    //         "id": "2364",
    //         "name": "assisted wide-grip chest dip (kneeling)",
    //         "target": "pectorals",
    //         "secondaryMuscles": [
    //             "triceps",
    //             "shoulders"
    //         ],
    //         "instructions": [
    //             "Adjust the machine to your desired height and secure your knees on the pad.",
    //             "Grasp the handles with a wide grip and keep your elbows slightly bent.",
    //             "Lower your body by bending your elbows until your upper arms are parallel to the floor.",
    //             "Push yourself back up to the starting position by extending your arms.",
    //             "Repeat for the desired number of repetitions."
    //         ]
    //     },
    //     {
    //         "bodyPart": "cardio",
    //         "equipment": "body weight",
    //         "gifUrl": "https://v2.exercisedb.io/image/PglBvODPAlgewh",
    //         "id": "3220",
    //         "name": "astride jumps (male)",
    //         "target": "cardiovascular system",
    //         "secondaryMuscles": [
    //             "quadriceps",
    //             "hamstrings",
    //             "calves"
    //         ],
    //         "instructions": [
    //             "Stand with your feet shoulder-width apart.",
    //             "Bend your knees and lower your body into a squat position.",
    //             "Jump explosively upwards, extending your legs and arms.",
    //             "While in the air, spread your legs apart and bring your arms out to the sides.",
    //             "Land softly with your feet shoulder-width apart, bending your knees to absorb the impact.",
    //             "Repeat for the desired number of repetitions."
    //         ]
    //     },
    //     {
    //         "bodyPart": "cardio",
    //         "equipment": "body weight",
    //         "gifUrl": "https://v2.exercisedb.io/image/CEmGhRVV5rr8Yk",
    //         "id": "3672",
    //         "name": "back and forth step",
    //         "target": "cardiovascular system",
    //         "secondaryMuscles": [
    //             "quadriceps",
    //             "hamstrings",
    //             "glutes",
    //             "calves"
    //         ],
    //         "instructions": [
    //             "Stand with your feet shoulder-width apart.",
    //             "Step forward with your right foot, bending your knee and lowering your body into a lunge position.",
    //             "Push off with your right foot and step back to the starting position.",
    //             "Repeat the movement with your left foot, alternating legs with each step.",
    //             "Continue stepping back and forth, maintaining a steady pace.",
    //             "Repeat for the desired duration or number of repetitions."
    //         ]
    //     },
    //     {
    //         "bodyPart": "back",
    //         "equipment": "stability ball",
    //         "gifUrl": "https://v2.exercisedb.io/image/POZuORDZa1Koaz",
    //         "id": "1314",
    //         "name": "back extension on exercise ball",
    //         "target": "spine",
    //         "secondaryMuscles": [
    //             "glutes",
    //             "hamstrings"
    //         ],
    //         "instructions": [
    //             "Place the stability ball on the ground and lie face down on top of it, with your hips resting on the ball and your feet against a wall or other stable surface.",
    //             "Position your hands behind your head or crossed over your chest.",
    //             "Engage your core and slowly lift your upper body off the ball, extending your back until your body forms a straight line from your head to your heels.",
    //             "Pause for a moment at the top, then slowly lower your upper body back down to the starting position.",
    //             "Repeat for the desired number of repetitions."
    //         ]
    //     },
    //     {
    //         "bodyPart": "back",
    //         "equipment": "body weight",
    //         "gifUrl": "https://v2.exercisedb.io/image/JUiZlN9FrsPpPe",
    //         "id": "3297",
    //         "name": "back lever",
    //         "target": "upper back",
    //         "secondaryMuscles": [
    //             "biceps",
    //             "forearms",
    //             "core"
    //         ],
    //         "instructions": [
    //             "Start by hanging from a pull-up bar with an overhand grip, hands slightly wider than shoulder-width apart.",
    //             "Engage your core and pull your shoulder blades down and back.",
    //             "Bend your knees and tuck them towards your chest.",
    //             "Slowly lift your legs up, keeping them straight, until your body is parallel to the ground.",
    //             "Hold this position for a few seconds, then slowly lower your legs back down to the starting position.",
    //             "Repeat for the desired number of repetitions."
    //         ]
    //     },
    //     {
    //         "bodyPart": "back",
    //         "equipment": "body weight",
    //         "gifUrl": "https://v2.exercisedb.io/image/l4KUx5KaAEDkyx",
    //         "id": "1405",
    //         "name": "back pec stretch",
    //         "target": "lats",
    //         "secondaryMuscles": [
    //             "shoulders",
    //             "chest"
    //         ],
    //         "instructions": [
    //             "Stand tall with your feet shoulder-width apart.",
    //             "Extend your arms straight out in front of you, parallel to the ground.",
    //             "Cross your arms in front of your body, with your right arm over your left arm.",
    //             "Interlock your fingers and rotate your palms away from your body.",
    //             "Slowly raise your arms up and away from your body, feeling a stretch in your back and chest.",
    //             "Hold the stretch for 15-30 seconds, then release.",
    //             "Repeat on the opposite side."
    //         ]
    //     }
    // ];
    const handleSearch = async () => {
        // setExercises(staticData);
        // return;
        if (search) {
            setLoading(true);
            const exercisesData = await fetchData(
                `${exercisedbURL}/exercises`,
                exerciseOptions,
                100,
            );
            console.log("exercisesData handleSearch()==>> ", exercisesData);
            try {
                const searchResusltExercises = exercisesData.filter(
                    (exercise) => exercise.name.toLowerCase().includes(search.toLowerCase()) ||
                        exercise.target.toLowerCase().includes(search) ||
                        exercise.equipment.toLowerCase().includes(search) ||
                        exercise.bodyPart.toLowerCase().includes(search)
                );
                setSearch(''); // clear search field 
                setExercises(searchResusltExercises); // setting the response data
                console.log("searchResusltExercises -------->", searchResusltExercises);
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