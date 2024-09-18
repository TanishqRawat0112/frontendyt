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
            console.log("User Details Fetched successfully");
            return tempUserData;
            // alert('User Details Fetched successfully');
        } else {
            // alert('User Details Fetching failed');
            console.log("User Details Fetching failed OR User is not logged in");
        }
    } catch (error) {
        console.log("Error while fetching User : ", error);
    }
};

export default fetchUserData;