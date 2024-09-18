const MainComp = ({userInfo}) => {
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
                    <div className="customise-channel-main-navbar-buttons-publish">
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
                            <input type="text" value={userInfo[1]} />
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
                            <input type="text" value={userInfo[0]} />
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