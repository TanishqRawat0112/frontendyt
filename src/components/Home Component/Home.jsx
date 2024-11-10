import { useState, useEffect, useRef } from "react";
import hitRequest from "../../api/hitRequest";
import { formatDistanceToNow } from "date-fns";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const [videos, setVideos] = useState([]);
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();
    
    // Create an array of refs, one for each video
    const videoRefs = useRef([]);
    const [hoveredVideoIndex, setHoveredVideoIndex] = useState(null); // Track which video is hovered

    // Fetch videos on component mount
    useEffect(() => {
        const fetchVideos = async () => {
            const res = await hitRequest("/videos/all-videos", "GET");
            setVideos(res.data); // Assuming res.data contains the videos array
        };
        fetchVideos();
    }, []);

    // Fetch users after videos are loaded
    useEffect(() => {
        const fetchUsers = async () => {
            if (videos.length === 0) return; // Wait until videos are loaded

            const usersArray = await Promise.all(
                videos.map(async (video) => {
                    const tempUserId = video.owner; // Assuming owner is user ID
                    const res = await hitRequest(`/users/c/${tempUserId}`, "GET");
                    return res.data; // Assuming res.data contains user info
                })
            );

            setUsers(usersArray); // Update users once all users are fetched
        };
        fetchUsers();
    }, [videos]); // Trigger this effect after videos are fetched

    // Handle hover events to play video
    const handleMouseEnter = (index) => {
        setHoveredVideoIndex(index); // Set the hovered video index
        const video = videoRefs.current[index];
        if (video) {
            video.play(); // Play video when mouse enters
        }
    };

    const handleMouseLeave = (index) => {
        setHoveredVideoIndex(null); // Clear the hovered video index
        const video = videoRefs.current[index];
        if (video) {
            video.pause(); // Pause video when mouse leaves
            video.currentTime = 0; // Reset video to the start
        }
    };

    const handleVideoPage = (videoId) => {
        navigate(`/watch/${videoId}`);
    }

    return (
        <div className="home-container">
            {videos.map((video, index) => {
                return (
                    <div
                        key={video._id}
                        className="home-video-card"
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={() => handleMouseLeave(index)}
                    >
                        <div className="home-video-card-upper" onClick={()=>handleVideoPage(video._id)}>
                            {hoveredVideoIndex === index ? (
                                // Render video when hovered
                                <video
                                    ref={(el) => (videoRefs.current[index] = el)} // Assign ref for each video
                                    src={video.videoFile} // Assuming this is the source of the video
                                    className="home-video-card-thumbnail"
                                    muted // Mute the video during hover play
                                    autoPlay // Auto-play video on hover
                                />
                            ) : (
                                // Render image when not hovered
                                <img
                                    src={video.thumbnail}
                                    alt={video.title}
                                    className="home-video-card-thumbnail"
                                />
                            )}

                            <div className="home-video-card-duration" onClick={()=>handleVideoPage(video._id)}>
                                {video.duration.toFixed(2)}
                            </div>
                        </div>

                        <div className="home-video-card-lower">
                            <div
                                className="home-video-card-lower-logo"
                                onClick={() => navigate(`/${users[index]?.username}`)}
                            >
                                {users[index] && (
                                    <img
                                        src={users[index].avatar}
                                        alt="Logo"
                                        className="home-video-card-lower-logo-img"
                                    />
                                )}
                            </div>
                            <div className="home-video-card-lower-details" onClick={()=>handleVideoPage(video._id)}>
                                <div className="home-video-card-lower-details-title">
                                    {video.title}
                                </div>
                                <div className="home-video-card-lower-details-owner">
                                    {users[index]?.fullname}
                                </div>
                                <div className="home-video-card-lower-details-views">
                                    {video.views} views .{" "}
                                    {formatDistanceToNow(new Date(video.createdAt), {
                                        addSuffix: true,
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Home;
