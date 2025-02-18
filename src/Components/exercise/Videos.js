import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { primaryColor } from '../../constants/color_constatnts';

const Videos = ({ videos, name }) => {

    if (videos.lenght) {
        return (
            <Stack justifyContent='center' flexWrap='wrap' alignItems='center'>
                'Loading...';
            </Stack>
        );
    }
    return (
        <Box sx={{ marginTop: { lg: '200px', sx: '20px' } }} p='20px'>
            <Typography variant='h3' mb='33px'>
                Watch
                <span style={{ color: `${primaryColor}`, textTransform: 'uppercase' }} >
                    &nbsp;{name}&nbsp;
                </span>
                exercise videos
            </Typography>
            <Stack
                justifyContent="flex-start"
                flexWrap="wrap"
                alignItems="center"
                sx={{
                    flexDirection: { lg: 'row', md: 'row', xs: 'column' },
                    gap: '20px',
                    p: 2,
                }}
            >
                {videos?.slice(0, 4).map((item, index) => (
                    <a
                        key={index}
                        className="exercise-video"
                        href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src={item.video.thumbnails[0].url}
                            alt={item.video.title}
                            style={{
                                width: '300px',
                                // height: '90px',
                                borderRadius: '4px',
                            }}
                        />
                        <Typography
                            variant="h6"
                            component="p"
                            sx={{
                                fontSize: '16px',
                                fontWeight: 500,
                                display: '-webkit-box',
                                WebkitBoxOrient: 'vertical',
                                WebkitLineClamp: 2,
                                overflow: 'hidden',
                            }}
                        >
                            {item.video.title}
                        </Typography>
                    </a>
                ))}
            </Stack>

        </Box>
    )
}

export default Videos