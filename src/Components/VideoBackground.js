import gymMotivationClip from '../assets/clips/gym-motivation-clip.mp4' // Adjust the path as needed
import videoThumbnail from '../assets/images/video-thumbnail.jpg'

export const VideoBackground = () => {
    return (
        <div>
            <div className="video-background"
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    overflow: "hidden",  // Ensures any overflowed video is clipped
                }}
            >
                {/* <iframe
                    title="YouTube Video"
                    src="https://www.youtube.com/embed/Yko3GMseY40?autoplay=1&mute=1&loop=1&playlist=Yko3GMseY40&controls=0&showinfo=0&modestbranding=1"
                    frameBorder="0"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                /> */}

                <video
                    style={{
                        position: "absolute",
                        top: "50%",           // Center the video vertically
                        left: "50%",          // Center the video horizontally
                        width: "125%",        // Scale the video to 1.2x width
                        height: "125%",       // Scale the video to 1.2x height
                        transform: "translate(-50%, -50%)", // Adjust the position after scaling
                        objectFit: "cover",   // Maintain aspect ratio, ensuring the video covers the screen
                    }}
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster={videoThumbnail}
                >
                    <source src={gymMotivationClip} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    )
}
export default VideoBackground;