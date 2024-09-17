import React, { useState, useEffect } from 'react';
import ChannelDetails from './ChannelDetails';

const Channel = () => {
    const [userData, setUserData] = useState([]);
    const [fetched, setFetched] = useState(false);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/v1/users/current-user', {
                    method: 'GET',
                    credentials: 'include',  // Include cookies in the request
                });

                const data = await response.json();
                if (data.statusCode === 200) {
                    let tempUserData = [];
                    tempUserData.push(data.data.username);
                    tempUserData.push(data.data.fullname);
                    tempUserData.push(data.data.avatar);
                    tempUserData.push(data.data.coverImage);
                    tempUserData.push(data.data.watchHistory);
                    setUserData(tempUserData);
                    setFetched(true);
                    // alert('User Details Fetched successfully');
                } else {
                    // alert('User Details Fetching failed');
                }
            } catch (error) {
                console.log("Error while fetching User : ", error);
            }
        };

        fetchUserData();  // Call the async function
    }, []);  // Empty dependency array ensures this runs only once


    return (
        <>
            {fetched
            ?
                <ChannelDetails userData={userData}  />
            :
                <h1>
                    You are Not Logged In 
                </h1>
            }
        </>
    );
}

export default Channel;
