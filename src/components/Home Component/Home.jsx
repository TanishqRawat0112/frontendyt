import { useState, useEffect } from "react";
import hitRequest from "../../api/hitRequest";
import { formatDistanceToNow } from 'date-fns';

const Home = () => {
    const [videos, setVideos] = useState([]);
    const [users, setUsers] = useState([]);
    // const [loadedUsers, setLoadedUsers] = useState(false);

    // Fetch videos on component mount
    useEffect(() => {
        const fetchVideos = async () => {
            const res = await hitRequest('/videos/all-videos', 'GET');
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
                    const res = await hitRequest(`/users/c/${tempUserId}`, 'GET');
                    return res.data; // Assuming res.data contains user info
                })
            );
            
            setUsers(usersArray); // Update users once all users are fetched
            // setLoadedUsers(true);
        };
        fetchUsers();
    }, [videos]); // Trigger this effect after videos are fetched

    return (
        <div className="home-container">
            {videos.map((video, index) => (
                <div key={video._id} className="home-video-card">
                    <div className="home-video-card-upper">
                        <img src={video.thumbnail} alt={video.title} className="home-video-card-thumbnail" />
                    </div>
                    <div className="home-video-card-lower">
                        <div className="home-video-card-lower-logo">
                            {users[index] && (
                                <img src={users[index].avatar} alt="Logo" className="home-video-card-lower-logo-img" />
                            )}
                        </div>
                        <div className="home-video-card-lower-details">
                            <div className="home-video-card-lower-details-title">
                                {video.title}
                            </div>
                            <div className="home-video-card-lower-details-owner">
                                {users[index] && users[index].fullname}
                            </div>
                            <div className="home-video-card-lower-details-views">
                                {video.views} views . {formatDistanceToNow(new Date(video.createdAt), { addSuffix: true })}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Home;
