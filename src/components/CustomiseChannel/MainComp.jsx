import { useState,useEffect } from "react";
import hitRequest from "../../api/hitRequest";
import { Link } from "react-router-dom";

const MainComp = ({userInfo,setCustomiseChannel}) => {
    const [fullname, setFullname] = useState("");
    const [username, setUsername] = useState("");
    const [avatar, setAvatar] = useState(null);
    const [coverImage, setCoverImage] = useState(null);

    useEffect(() => {
        if (userInfo && userInfo.length > 0) {
            setUsername(userInfo[0]);
            setFullname(userInfo[1]);
            setAvatar(userInfo[2]);
            setCoverImage(userInfo[3]);
        }
    }, [userInfo]); 
    

    const handleAvatarUpload = (e) => {
        setAvatar(e.target.files[0]);
        // console.log("Avatar : ",e.target.files[0]);
    }

    const handleCoverImageUpload = (e) => {
        setCoverImage(e.target.files[0]);
        // console.log("Cover Image : ",e.target.files[0]);
    }

    const handleFormSubmit = async(e)=>{
        e.preventDefault();
        // console.log("Fullname : ",fullname);
        // console.log("Username : ",username);
        // console.log("Avatar : ",avatar);
        // console.log("Cover Image : ",coverImage);
        if(!fullname && !username && !avatar && !coverImage){
            console.log("No changes made to user details or images");
            return;
        }
        if(username !== userInfo[0] && fullname !== userInfo[1]){
            const formData = new FormData();
            formData.append('fullname',fullname);
            formData.append('username',username);

            const response = await hitRequest('/users/update-details','PATCH',formData);

            if(response){
                console.log("User details updated successfully");
            }
            else{
                console.log("Error while updating user details");
            }
        }
        else if(username!== userInfo[0]){
            const formData = new FormData();
            formData.append('username',username);

            const response = await hitRequest('/users/update-details','POST',formData);

            if(response){
                console.log("User details updated successfully");
            }
            else{
                console.log("Error while updating user details");
            }
        }
        else if(fullname !== userInfo[1]){
            const formData = new FormData();
            formData.append('fullname',fullname);

            const response = await hitRequest('/users/update-details','POST',formData);

            if(response){
                console.log("User details updated successfully");
            }
            else{
                console.log("Error while updating user details");
            }
        }
        else{
            console.log("No changes made to user details");
        }

        if(avatar!==userInfo[2]){
            const avatarData = new FormData();
            avatarData.append('avatar',avatar);

            const avatarResponse = await hitRequest('/users/update-details/update-avatar','PATCH',avatarData);
            // console.log("Avatar response status : ",avatarResponse?.statusCode);
            if(avatarResponse){
                console.log("Avatar updated successfully");
            }
            else{
                console.log("Error while updating avatar");
            }
        }

        if(coverImage){
            const coverImageData = new FormData();
            coverImageData.append('coverImage',coverImage);
            const coverImageResponse = await hitRequest('/users/update-details/update-cover-image','PATCH',coverImageData);
            if(coverImageResponse){
                console.log("Cover image updated successfully");
            }
            else{
                console.log("Error while updating cover image");
            }
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
                        <Link to="/user/channel" style={{ textDecoration: 'none', color:'inherit' }}>
                        View Channel
                        </Link>
                    </div>
                    <div className="customise-channel-main-navbar-buttons-cancel" >
                        <Link to="/" style={{ textDecoration: 'none', color:'inherit' }}>
                        Cancel
                        </Link>
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
                                    <input type="file" placeholder="Upload" onChange={handleCoverImageUpload} />
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
                                    <input type="file" placeholder="Upload" onChange={handleAvatarUpload} />
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