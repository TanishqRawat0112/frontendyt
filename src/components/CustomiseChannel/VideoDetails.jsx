import Close from "../../assets/close.png";
import Feedback from "../../assets/feedback.png";
import check from "../../assets/check.png";
import copy from "../../assets/copy.png";
import autoGenerate from "../../assets/auto-generate.png";
import upload_photo from "../../assets/upload_photo.png";
import test from "../../assets/analytics.png";
import subtitles from "../../assets/subtitles.png";
import endScreen from "../../assets/end-screen.png";
import cards from "../../assets/info.png";
import upload from "../../assets/upload.png";
import hd from "../../assets/hd.png";
import { useState } from "react";
import hitRequest from "../../api/hitRequest";
import { useNavigate, Link } from "react-router-dom";



const VideoDetails = ({video,videoUrl}) => {
    const [formSection, setFormSection] = useState(1);
    const [videoTitle, setVideoTitle] = useState(video.name);
    const [videoDescription, setVideoDescription] = useState("");
    const [publishStatus, setPublishStatus] = useState(true);
    const [thumbnail, setThumbnail] = useState(null);
    const navigate = useNavigate();

    const handleFormSubmit = async(e) => {
        e.preventDefault();
        if(!videoTitle || !videoDescription || !thumbnail){
            alert("Please fill all the fields");
            return;
        }

        const formData = new FormData();
        formData.append('videoFile',video);
        formData.append('thumbnail',thumbnail);
        formData.append('title',videoTitle);
        formData.append('description',videoDescription);
        formData.append("duration",0);

        const response = await hitRequest('/videos/publish','POST',formData);

        if(response){
            console.log("video details updated successfully");
            navigate("/");
        }
        else{
            console.log("Error while updating video details");
        }
    }

    const handleThumbnailUpload = async(e) => {
        const file = e.target.files[0];
        if(file){
            setThumbnail(file);
        }
    }
    return ( 
        <div className="publish-video-form">
            <form onSubmit={handleFormSubmit}>
            <div className="publish-video-form-top">
                    <div className="upload-video">
                        {videoTitle}
                    </div>
                    <div className="publish-video-form-top-buttons">
                            <div className="video-form-button">
                                <img src={Feedback} alt="feedback" />
                            </div>
                            <Link to="/user/channel" style={{ textDecoration: 'none', color:'inherit' }}>
                            <div className="video-form-button">
                                <img src={Close} alt="close" />
                            </div>
                            </Link>
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
                        <div className="video-left-title-heading">
                            Title (required)
                        </div>
                        <div className="video-left-title-main">
                            <input type="text" placeholder="Add a title that describes your video" value={videoTitle} onChange={(e)=>setVideoTitle(e.target.value)} />
                        </div>
                    </div>
                    <div className="video-left-description">
                        <div className="video-left-description-heading"  >
                            Description
                        </div>
                        <div className="video-left-description-main">
                            <textarea placeholder="Tell viewers about your video" onChange={(e)=>setVideoDescription(e.target.value)} />
                        </div>
                    </div>
                    <div className="video-left-thumbnail">
                        
                        <div className="video-left-thumbnail-heading" >
                            Thumbnail
                        </div>
                        <div className="video-left-thumbnail-text">
                        Set a thumbnail that stands out and draws viewers' attention. <span> &nbsp;Learn more</span>
                        </div>
                        <div className="video-left-thumbnail-options">
                            <input
                                type="file"
                                id="fileInput"
                                onChange={handleThumbnailUpload}
                                style={{ display: "none" }}
                            />
                            <label htmlFor="fileInput">
                            <div className="video-left-thumbnail-options-upload" >
                                <img src={upload_photo} alt="upload" />
                                <div className="video-left-thumbnail-options-upload-text">
                                    Upload file
                                </div>
                            </div>
                            </label>
                            <div className="video-left-thumbnail-options-auto">
                                <img src={autoGenerate} alt="auto Generate" />
                                <div className="video-left-thumbnail-options-auto-text">
                                    Auto-generate
                                </div>
                            </div>
                            <div className="video-left-thumbnail-options-test">
                                <img src={test} alt="test and compare" />
                                <div className="video-left-thumbnail-options-test-text">
                                    Test and compare
                                </div>
                            </div>
                        </div>
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
                                    <div className="video-text-link" onClick={()=>window.open(videoUrl)}>
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
                :formSection===2 ?
                <div className="video-element-main-container">

                    <div className="video-element-heading">
                        <div className="video-element-heading-main">
                            Video elements
                        </div>
                        <div className="video-element-heading-text">
                        Use cards and an end screen to show viewers related videos, websites, and calls to action.<span>&nbsp; Learn more</span>
                        </div>
                    </div>
                    <div className="video-element-subtitles video-element-options">
                        <div className="video-element-options-image">
                            <img src={subtitles} alt="subtitles" />
                        </div>
                        <div className="video-element-options-text">
                            Add subtitles
                            <br />
                            Reach a broader audience by adding subtitles to your video
                        </div>
                        <div className="video-element-options-button">
                            Add
                        </div>
                    </div>
                    <div className="video-element-end-screen video-element-options">
                        <div className="video-element-options-image">
                            <img src={endScreen} alt="end screen" />
                        </div>
                        <div className="video-element-options-text">
                            Add an end screen
                            <br />
                            Promote related content at the end of your video
                        </div>
                        <div className="video-element-options-button">
                            Add
                        </div>
                    </div>
                    <div className="video-element-cards video-element-options">
                        <div className="video-element-options-image">
                            <img src={cards} alt="info" />
                        </div>
                        <div className="video-element-options-text">
                            Add cards
                            <br />
                            Promote related content during your video
                        </div>
                        <div className="video-element-options-button">
                            Add
                        </div>
                    </div>

                </div>
                :formSection===3 ?
                <div className="checks-main-container">
                    <div className="checks-heading">
                        <div className="checks-main-heading">
                            Checks
                        </div>
                        <div className="checks-heading-subtext">
                        We'll check your video for issues that may restrict its visibility and then you will have the opportunity to fix issues before publishing your video. <span>&nbsp; Learn more</span>
                        </div>
                    </div>
                    <div className="checks-copyrights">
                        <div className="checks-copyrights-text">
                            <div className="checks-copyrights-text-main">
                                Copyright
                            </div>
                            <div className="checks-copyrights-text-sub">
                                No issues found
                            </div>
                        </div>
                        <div className="checks-copyrights-tick">
                            <img src={check} alt="check" />
                        </div>
                    </div>
                    <div className="checks-copyrights-garbage">
                    Remember: These check results aren;t final. Issues may come up in the future that impact your video. <span> Learn more</span>
                    </div>
                </div>
                :formSection===4 ?
                <div className="visibility-main-container video-form-main-form-container">
                    <div className="video-form-main-form-left">
                        <div className="visibility-main">
                            <div className="visibility-heading">
                                Visibility
                            </div>
                            <div className="visibility-heading-text">
                            Choose when to publish and who can see your video
                            </div>
                        </div>
                        <div className="visibilty-publish-status">
                            <div className="visibilty-publish-status-heading">
                                <div className="visibilty-publish-status-heading-main">
                                    Save or publish
                                </div>
                                <div className="visibilty-publish-status-heading-text">
                                Make your video public or private
                                </div>
                            </div>
                            <div className="visibility-publish-status-main-body">
                                <div className="publish-options-main" onClick={()=>{setPublishStatus(false)}}>
                                <input type="radio" id="contactChoice1" name="contact" value="email" />
                                <label htmlFor="contactChoice1">
                                    <div className="publish-options">
                                        <div className="publish-options-heading">
                                            Private
                                        </div>
                                        <div className="publish-options-text">
                                            Only you and people you choose can watch your video
                                        </div>
                                    </div>
                                </label>
                                </div>

                                <div className="publish-options-main" onClick={()=>{setPublishStatus(false)}}>
                                <input type="radio" id="contactChoice2" name="contact" value="phone" />
                                <label htmlFor="contactChoice2">
                                <div className="publish-options">
                                        <div className="publish-options-heading">
                                            Unlisted
                                        </div>
                                        <div className="publish-options-text">
                                            Anyone with the video link can watch your video
                                        </div>
                                    </div>
                                </label>
                                </div>

                                <div className="publish-options-main" onClick={()=>{setPublishStatus(true)}}>
                                <input type="radio" id="contactChoice3" name="contact" value="mail" />
                                <label htmlFor="contactChoice3">
                                <div className="publish-options">
                                        <div className="publish-options-heading">
                                            Public
                                        </div>
                                        <div className="publish-options-text">
                                            Everyone can watch your video
                                        </div>
                                </div>
                                </label>
                                </div>
                            </div>
                            
                        </div>
                        <div className="visibility-schedule">
                            Schedule
                        </div>
                        <div className="visibility-warning">
                            Warning!!!
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
                                    <div className="video-text-link" onClick={()=>window.open(videoUrl)}>
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
                null
                }
            </div>
            <div className="publish-video-form-down">
                <div className="publish-video-form-bottom-checks">
                    <div className="publish-bottom-checks-upload">
                        <img src={upload} alt="upload" />
                    </div>
                    <div className="publish-bottom-checks-processing">
                        <img src={hd} alt="hd" />
                    </div>
                    <div className="publish-bottom-checks-copyights">
                        <img src={check} alt="check" />
                    </div>
                    <div className="publish-bottom-checks-text">
                        Checks complete. No issues found.
                    </div>
                </div>
                <div className="publish-video-form-bottom-buttons">
                    {formSection!==1 && 
                    <div className="publish-video-form-bottom-buttons-back" onClick={()=>setFormSection(formSection-1)}>   
                        Back
                    </div>
        }   
                    <button 
                        type={formSection === 4 ? "submit" : "button"}
                        className="publish-video-form-bottom-buttons-other" 
                        onClick={() => {
                            if (formSection !== 4) {
                                setFormSection(formSection + 1);
                            }
                        }}>
                        {formSection===4 ? "Save" : "Next"}
                    </button>
                </div>
                
            </div>
            </form>
        </div>
     );
}
 
export default VideoDetails;