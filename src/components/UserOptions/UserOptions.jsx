import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const UserOptions = () => {
    const [userData, setUserData] = useState([]);

    const handleSignout = async () => {
        console.log("Signout clicked");
        try {
            const response = await fetch('http://localhost:8000/api/v1/users/logout', {
                method: 'POST',
                credentials: 'include',  // Include cookies in the request
            });

            const data = await response.json();
            if (data.statusCode === 200) {
                alert('Signout successfully');
                window.location.href = '/';
            } else {
                alert('Signout failed');
            }
        } catch (error) {
            console.log("Error while signing out : ", error);
        }
    }

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
                    // alert('User Details Fetched successfully');
                } else {
                    // alert('User Details Fetching failed');
                }
            } catch (error) {
                console.log("Error while fetching User : ", error);
            }
        };

        fetchUserData();  // Call the async function
    }, []);
    
    return ( 
        <div className="user-options-container">
            <div className="user-options-first-section">
                <div className="user-options-first-section-details">
                    <div className="user-options-first-section-details-avatar">
                        <img src={userData[2]} alt="User Avatar" />
                    </div>
                    <div className="user-options-first-section-details-name">
                        <div>
                            {userData[1]}
                        </div>
                        <div>
                            @{userData[0]}
                        </div>
                    </div>

                </div>
                <div className="user-options-first-section-view">
                    View your channel
                </div>
            </div>
            <div className="user-options-second-section">
                <div className="user-options-second-section-account">
                    <Link to="/user/channel" style={{ textDecoration: 'none', color:'inherit' }}>
                    Account Details
                    </Link>
                </div>
                <div className="user-options-second-section-switch-account" >
                    <Link to="/change-password" style={{ textDecoration: 'none', color:'inherit' }}>
                        Change Password
                    </Link>
                </div>
                <div className="user-options-second-section-sign-out" onClick={handleSignout}>
                    Sign Out
                </div>
            </div>
            <div className="user-options-third-section">
                <div className="user-options-third-section-studio">
                    Streami Studio
                </div>
                <div className="user-options-third-section-purschases">
                    Purchases and memberships
                </div>
            </div>
            <div className="user-options-fourth-section">
                <div className="user-options-fourth-section-data">
                    Your data in Streami
                </div>
                <div className="user-options-fourth-section-appearance">
                    Appearance : Device theme
                </div>
                <div className="user-options-fourth-section-lanuage">
                    Language : English
                </div>
                <div className="user-options-fourth-section-restricted">
                    Restricted Mode : Off
                </div>
                <div className="user-options-fourth-section-location">
                    Location : India
                </div>
                <div className="user-options-fourth-section-keyboard">
                    Keyboard shortcuts
                </div>
            </div>
            <div className="user-options-fifth-section">
                <div className="user-options-fifth-section-settings">
                    Settings
                </div>
            </div>
            <div className="user-options-last-section">
                <div className="user-options-last-section-help">
                    Help
                </div>
                <div className="user-options-last-section-feedback">
                    Send Feedback
                </div>
            </div>
        </div>
     );
}
 
export default UserOptions;