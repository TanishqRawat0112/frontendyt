import Close from "../../assets/close.png";
import Feedback from "../../assets/feedback.png";
import check from "../../assets/check.png";
import copy from "../../assets/copy.png";
import { useState } from "react";
const VideoDetails = ({video,videoUrl}) => {
    const [formSection, setFormSection] = useState(1);
    return ( 
        <div className="publish-video-form">
            <div className="publish-video-form-top">
                    <div className="upload-video">
                        {video.name}
                    </div>
                    <div className="publish-video-form-top-buttons">
                            <div className="video-form-button">
                                <img src={Feedback} alt="feedback" />
                            </div>
                            <div className="video-form-button">
                                <img src={Close} alt="close" />
                            </div>
                    </div>
            </div>
            <div className="video-form-dynamic-navbar">
                <div className="video-form-dynamic-navbar-item" onClick={()=>setFormSection(1)}>
                    Details
                    <div className="video-form-dynamic-navbar-item-circle-container">
                    <div className="video-form-dynamic-navbar-item-circle">
                        <div className="video-form-dynamic-navbar-item-circle-two">

                        </div>
                    </div>
                    </div>
                </div>
                <div className="video-form-dynamic-navbar-item" onClick={()=>setFormSection(2)}>
                    Video elements
                    <div className="video-form-dynamic-navbar-item-circle-container">
                    <div className="video-form-dynamic-navbar-item-circle">
                        <div className="video-form-dynamic-navbar-item-circle-two">
                            
                        </div>
                    </div>
                    </div>
                </div>
                <div className="video-form-dynamic-navbar-item" onClick={()=>setFormSection(3)}>
                    Checks
                    <div className="video-form-dynamic-navbar-item-circle-container">
                    <div className="video-form-dynamic-navbar-item-circle">
                        <div className="video-form-dynamic-navbar-item-circle-two">
                            
                        </div>
                    </div>
                    </div>
                </div>
                <div className="video-form-dynamic-navbar-item" onClick={()=>setFormSection(4)}>
                    Visibility 
                    <div className="video-form-dynamic-navbar-item-circle-container">
                    <div className="video-form-dynamic-navbar-item-circle">
                        <div className="video-form-dynamic-navbar-item-circle-two">
                            
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div className="video-form-main-form">
                {formSection===1 ?
                <div className="video-form-main-form-container">
                <div className="video-form-main-form-left">
                    <div className="video-left-details">
                        <div className="video-left-details-left">
                            Details
                        </div>
                        <div className="video-left-details-right">
                            Reuse details
                        </div>
                    </div>
                    <div className="video-left-title">

                    </div>
                    <div className="video-left-description">

                    </div>
                    <div className="video-left-thumbnail">

                    </div>
                    <div className="video-left-playlist">

                    </div>
                    <div className="video-left-audience">

                    </div>
                </div>
                <div className="video-form-main-form-right">
                    <div className="video-form-main-form-right-video-container">
                        <video width="285" controls>
                            <source src={videoUrl} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <div className="video-form-main-form-right-video-text">
                            <div className="video-form-main-form-right-video-text-up">
                                <div className="video-form-main-form-right-video-text-up-main">
                                    Video link
                                    <div className="video-text-link">
                                        {videoUrl}
                                    </div>
                                </div>
                                <div className="video-form-main-form-right-video-text-up-copy">
                                    <img src={copy} alt="copy" />
                                </div>
                            </div>
                            <div className="video-form-main-form-right-video-text-down">
                                Filename
                                <div className="video-file-name">
                                    {video.name}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                :
                <div>
                    hii
                </div>
                }
            </div>
                {/* <div className="player">
                    {videoUrl && 
                    <video width="260" controls>
                        <source src={videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    }
                </div> */}
        </div>
     );
}
 
export default VideoDetails;