import settings from "../../assets/settings.png";
import feedback from "../../assets/feedback.png";
import dashboard from "../../assets/dashboard.png";
import content from "../../assets/content.png";
import analytics from "../../assets/analytics.png";
import comments from "../../assets/comments.png";
import customisation from "../../assets/customisation.png";
const SideBar = ({userInfo}) => {
    return ( 
        <div className="customise-channel-sidebar-container">
            <div className="customise-channel-sidebar-top">
                <div className="customise-channel-sidebar-top-image">
                    <img src={userInfo[2]} alt="Profile" />
                </div>
                <div className="customise-channel-sidebar-top-name">
                    <p>Your Channel</p>
                    <p style={{color:"rgb(100, 100, 100)"}}>{userInfo[1]}</p>
                </div>
            </div>
            <div className="customise-channel-sidebar-middle">
                <div className="customise-channel-sidebar-middle-dashboard">
                    <img src={dashboard} alt="S" />
                    <p>Dashboard</p>
                </div>
                <div className="customise-channel-sidebar-middle-content">
                    <img src={content} alt="S" />
                    <p>Content</p>
                </div>
                <div className="customise-channel-sidebar-middle-analytics">
                    <img src={analytics} alt="S" />
                    <p>Analytics</p>
                </div>
                <div className="customise-channel-sidebar-middle-comments">
                    <img src={comments} alt="S" />
                    <p>Comments</p>
                </div>
                <div className="customise-channel-sidebar-middle-customisation">
                    <img src={customisation} alt="S" />
                    <p>Customisation</p>
                </div>
            </div>
            <div className="customise-channel-sidebar-bottom">
                    <div className="customise-channel-sidebar-bottom-settings">
                        <img src={settings} alt="S" />
                        <p>Settings</p>
                    </div>
                    <div className="customise-channel-sidebar-bottom-feedback">
                        <img src={feedback} alt="F" />
                        <p>Send Feedback</p>
                    </div>
            </div>
        </div>
     );
}
 
export default SideBar;