import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Use from react-router-dom
import UserChannel from "./UserChannel"; // Assuming UserChannel is your UI component
import hitRequest from "../../api/hitRequest"; // Your API request function
import { getAllVideos } from "../../api/getAllVideos"; // API to fetch videos
import { checkUserLogin } from "../../api/auth"; // API to check login status

export default function SearchUser() {
    const navigate = useNavigate(); // Replaces useRouter
    const { user_id } = useParams(); // Replaces useParams from Next.js
    const [user, setUser] = useState(null);
    const [currentUser, setCurrentUser] = useState(null);
    const [videos, setVideos] = useState([]);
    const [loadingVideos, setLoadingVideos] = useState(false);
    const [loadingUser, setLoadingUser] = useState(true);

    // Check if user is logged in
    useEffect(() => {
        const checkLoginStatus = async () => {
            const currentUser = await checkUserLogin();
            setCurrentUser(currentUser);
        };
        checkLoginStatus();
    }, []);

    // Redirect if user is the current logged-in user
    useEffect(() => {
        if (currentUser && user_id === currentUser.username) {
            navigate(`/user/channel`); // Replaces router.push
        }
    }, [currentUser, user_id, navigate]);

    // Fetch user channel details
    useEffect(() => {
        const fetchUserChannel = async () => {
            try {
                const res = await hitRequest(`/users/channel/${user_id}`, "GET");
                setLoadingUser(false);
                setUser(res?.data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchUserChannel();
    }, [user_id]);

    // Fetch videos and filter by user ID
    useEffect(() => {
        const fetchVideos = async () => {
            if (user) {
                setLoadingVideos(true);
                const res = await getAllVideos();
                if (res) {
                    const userVideos = res.filter((video) => video.owner === user._id);
                    setVideos(userVideos);
                }
                setLoadingVideos(false);
            }
        };
        if (user) fetchVideos(); // Fetch videos only after user is fetched
    }, [user]);

    if (loadingVideos) {
        return <div>Loading videos...</div>;
    }

    if (loadingUser) {
        return <div>Loading user...</div>;
    }

    return (
        <div>
            {/* {console.log("User : ", user)} */}
            {/* Hii */}
            {console.log("User : ", user)}
            <UserChannel user={user} videos={videos} />
        </div>
    );
}
