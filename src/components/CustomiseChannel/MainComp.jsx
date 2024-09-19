import { useState } from "react";

const MainComp = ({userInfo}) => {
    const [fullname, setFullname] = useState(userInfo[1]);
    const [username, setUsername] = useState(userInfo[0]);

    const handleFormSubmit = async(e)=>{
        e.preventDefault();
        console.log("Fullname : ",fullname);
        console.log("Username : ",username);
        if(!fullname || !username){
            return;
        }
        const formData = new FormData();
        formData.append('fullname',fullname);
        formData.append('username',username);
        try {
            const response = await fetch('http://localhost:8000/api/v1/users/update-details',{
                method: 'PATCH', 
                credentials: 'include',  
                body: formData
            });
            console.log("Response : ",response); 
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            if(data.statusCode === 200){
                // alert('User logged In successfully');
                console.log("User updated successfully");
                // setLogin(false);
            }
        } catch (error) {
            console.log("Error : ",error);
        }
    }
    return ( 
        <div className="customise-channel-main-container">
            <header className="customise-channel-main-header">
                Channel customisation
            </header>
            <div className="customise-channel-main-navbar">
                <div className="customise-channel-main-navbar-options">
                    <div className="customise-channel-main-navbar-options-profile">
                        Profile
                    </div>
                    <div className="customise-channel-main-navbar-options-home-tab">
                        Home tab
                    </div>
                </div>
                <div className="customise-channel-main-navbar-buttons">
                    <div className="customise-channel-main-navbar-buttons-viewChannel">
                        View Channel
                    </div>
                    <div className="customise-channel-main-navbar-buttons-cancel">
                        Cancel
                    </div>
                    <div className="customise-channel-main-navbar-buttons-publish" onClick={handleFormSubmit}>
                        Publish
                    </div>
                </div>
            </div>
            <div className="customise-channel-form-container">
                <form action="">
                    <div className="banner">
                        <label htmlFor="">
                            Banner image
                        </label>
                        <p className="customise-form-para">
                        This image will appear across the top of your channel
                        </p>
                        <div className="banner-image">
                            <div className="banner-image-img">
                                <img src={userInfo[3]} alt="" />
                            </div>
                            <div className="banner-image-content">
                                <div className="customise-form-para">
                                For the best results on all devices, use an image that's at least 2048 x 1152 pixels and 6MB or less. 
                                </div>
                                <div className="banner-image-content-side-input">
                                    <input type="file" placeholder="Upload" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="profileImage">
                        <label htmlFor="">
                                Picture
                            </label>
                            <p className="customise-form-para">
                            Your profile picture will appear where your channel is presented on Streami, like next to your videos and comments.
                            </p>
                            <div className="banner-image">
                                <div className="profile-image-img">
                                    <img src={userInfo[2]} alt="" />
                                </div>
                                <div className="banner-image-content">
                                    <div className="customise-form-para">
                                    It's recommended to use a picture that's at least 98 x 98 pixels and 4MB or less. Use a PNG or GIF (no animations) file. Make sure your picture follows the YouTube Community Guidelines. 
                                    </div>
                                    <div className="banner-image-content-side-input">
                                    <input type="file" placeholder="Upload" />
                                </div>
                                </div>
                            </div>
                    </div>
                    <div className="name">
                        <div className="name-heading">
                            <label htmlFor="">Name</label>
                        </div>
                        <div className="customise-form-para">
                        Choose a channel name that represents you and your content. Changes made to your name and picture are visible only on YouTube and not other Google services. You can change your name twice in 14 days.
                        </div>
                        <div className="name-input">
                            <input type="text" value={fullname} onChange={(e)=>setFullname(e.target.value)}/>
                        </div>
                    </div>
                    <div className="name">
                        <div className="name-heading">
                            <label htmlFor="">
                                Handle
                            </label>
                        </div>
                        <div className="customise-form-para">
                        Choose your unique handle by adding letters and numbers. You can change your handle back within 14 days. Handles can be changed twice every 14 days.
                        </div>
                        <div className="name-input">
                            <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)}  />
                        </div>
                    </div>
                    <div className="name">
                        <div className="name-heading">
                            <label htmlFor="">
                                Description
                            </label>
                        </div>
                        <div className="name-input">
                            <textarea name="desc" id="desc" cols="30" rows="10" placeholder="Tell viewers about your channel. Your description will appear in the about section of your channel and search results, among other places. "></textarea>
                        </div>
                    </div>
                    <div className="name">
                        <div className="name-heading">
                            <label htmlFor="">
                                Contact Info
                            </label>
                        </div>
                        <div className="customise-form-para">
                        Let people know how to contact you with business inquiries. The email address you enter may appear in the About section of your channel and be visible to viewers.
                        </div>
                        <div className="name-input">
                            <input type="text" placeholder="Enter your email address" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default MainComp;