import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import hitRequest from "../../api/hitRequest";

const VideoPlayer = () => {
    const { videoId } = useParams(); // Get the videoId from the URL
    const [video, setVideo] = useState(null);

    // Fetch the video details using the videoId
    useEffect(() => {
            const fetchVideo = async () => {
                try {
                    console.log("Video id : ",videoId);
                    const res = await hitRequest(`/videos/watch/${videoId}`, "GET");
                    setVideo(res.data); // Assuming res.data contains the video details
                } catch (error) {
                    console.log(error);
                }
            };
            fetchVideo();
    }, [videoId]);

    if (!video) {
        return <div>Loading...</div>; // Show loading state while fetching video
    }

    return (
        <div className="video-player-container">
        {console.log(video)}
            <video
                src={video.videoFile} // The video source URL
                controls
                autoPlay
                className="video-player"
                height={500}
                width={500}
            />
            <h1>{video.title}</h1>
            <p>{video.description}</p>
            {/* Add any other video details or components as needed */}
        </div>
    );
};

export default VideoPlayer;
