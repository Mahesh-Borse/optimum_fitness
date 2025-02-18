import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { exerciseOptions, exerciseYotubeOptions, fetchData } from '../../utils/fetchData';
import { exercisedbURL, exerciseYoutubeVideoURL } from '../../constants';
import Detail from './Detail';
import Videos from './Videos';
import SimilarExercises from './SimilarExercises';
const ErrorBoundary = React.lazy(() => import('../../utils/ErrorBoundary'));


const ExerciseDetailsPage = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchExerciseData = async () => {

      const data = await fetchData(
        `${exercisedbURL}/exercises/exercise/${id}`,
        exerciseOptions,
      );
      setExerciseDetail(data);

      const videoData = await fetchData(
        `${exerciseYoutubeVideoURL}/search?query=${data.name}`,
        exerciseYotubeOptions,
      );
      setExerciseVideos(videoData.contents);


    };

    fetchExerciseData();
  }, [id]);

  return (

    <Box>
      <ErrorBoundary>
        <Detail exerciseDetail={exerciseDetail} />
        <Videos videos={exerciseVideos} name={exerciseDetail.name} />
        <SimilarExercises />
      </ErrorBoundary>

    </Box>
  )
}

export default ExerciseDetailsPage