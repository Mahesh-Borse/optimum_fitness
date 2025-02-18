import { Box } from '@mui/material';
import gymMotivationClip from '../assets/clips/gym-motivation-clip.mp4';
import videoThumbnail from '../assets/images/video-thumbnail.jpg';

export const VideoBackground = () => {
    return (
        <Box sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            overflow: 'hidden',  // Ensures any overflowed video is clipped
        }}>
            <video
                autoPlay
                muted
                loop
                playsInline
                poster={videoThumbnail}
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    width: "125%",
                    height: "125%",
                    transform: "translate(-50%, -50%)",
                    objectFit: "cover",
                }}
            >
                <source src={gymMotivationClip} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </Box>
    );
};

export default VideoBackground;
