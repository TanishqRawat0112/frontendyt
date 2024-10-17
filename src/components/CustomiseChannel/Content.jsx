import { useState,useEffect } from "react";
import fetchUserData from "../../api/getUserData";
import SideBar from "./Sidebar";
import Close from "../../assets/close.png";
import Feedback from "../../assets/feedback.png";
import Upload from "../../assets/upload.png";
import VideoDetails from "./VideoDetails";
import { Link } from "react-router-dom";

const CustomiseChannel = ({setCustomiseChannel,studioState,setStudioState}) => {
    const [userInfo, setUserInfo] = useState([]);
    const [video, setVideo] = useState(null);
    const [videoUrl, setVideoUrl] = useState(null);
    const [initial, setInitial] = useState(true);
    useEffect(()=>{
        const setData = async () => {
            let tempUserInfo = await fetchUserData();
            if(tempUserInfo.length>0){
                setUserInfo(tempUserInfo);
            }
        }
        setData(); 
    },[]);

    const handleVideoUpload = async (e) => {
        const file = e.target.files[0];
        if(file){
            console.log("file upload progressing");
            const url = URL.createObjectURL(file);
            setVideoUrl(url);
            setVideo(file);
            setInitial(false);
        }
        // const base64 = await convertBase64(file);
    }

    return ( 
        <div className="customise-channel-container">
            {/* SideBar */}
            <SideBar userInfo={userInfo} />
            {/* Main Content  */}

            <div className="customise-channel-main-container">
                <div className="publish-form-wrapper">
                {initial ?
               <div className="publish-video-form">
                <div className="publish-video-form-top">
                    <div className="upload-video">
                        Upload videos
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
                <form>
                <div className="publish-video-form-body">
                    <div className="publish-video-form-body-top">
                        <div className="publish-video-form-body-top-function">
                        <input
                        type="file"
                        id="fileInput"
                        onChange={handleVideoUpload}
                        style={{ display: "none" }}
                        />
                        <label htmlFor="fileInput">
                            <img src={Upload} alt="upload" />
                        </label>
                        </div>
                    </div>
                    <div className="publish-video-form-body-mid">
                        <div className="publish-video-form-body-mid-first">
                            Drag and drop video files to upload
                        </div>
                        <div className="publish-video-form-body-mid-second">
                            Your videos will be private until you publish them.
                        </div>
                    </div>
                    <div className="publish-video-form-body-bottom">
                        <div className="publish-video-form-body-bottom-button">
                        <input
                        type="file"
                        id="fileInput"
                        onChange={handleVideoUpload}
                        style={{ display: "none" }}
                        />
                        <label htmlFor="fileInput">
                            Select files
                        </label>
                        </div>
                    </div>
                </div>
                </form>
                <div className="publish-video-form-bottom">
                    <div className="garbage">
                        By submitting your videos to YouTube, you acknowledge that you agree to YouTube's <span> &nbsp;Terms of Service&nbsp;</span> and <span>&nbsp; Community Guidelines</span>.
                    </div>
                    <div className="garbage">
                        Please be sure not to violate others' copyright or privacy rights. <span>&nbsp;Learn more</span>  
                    </div>
                </div>
               </div>
                : <VideoDetails video={video} videoUrl={videoUrl} />}
               </div>
            </div>
            
            {/* <MainComp userInfo={userInfo} setCustomiseChannel={setCustomiseChannel} /> */}
        </div>
     );
}
 
export default CustomiseChannel;