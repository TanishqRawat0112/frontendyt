import upload from '../../assets/upload.png';
import live from '../../assets/live.png';
import post from '../../assets/create-post.png';
import { Link } from 'react-router-dom';
const PopupNavbar = ({setStudioState}) => {
    return ( 
        <div className="popup-container">
            <div className="popup-options" >
                <div className="popup-options-icon">
                    <img src={upload} alt="upload" />
                </div>
                <div className="popup-options-text">
                <Link to='/studio/content' style={{ textDecoration: 'none', color:'inherit' }}>
                    Upload video
                </Link>
                </div>
            </div>
            <div className="popup-options">
                <div className="popup-options-icon">
                    <img src={live} alt="live" />
                </div>
                <div className="popup-options-text">
                    Go live
                </div>
            </div>
            <div className="popup-options">
                <div className="popup-options-icon">
                    <img src={post} alt="post" />
                </div>
                <div className="popup-options-text">
                    Create post
                </div>
            </div>
        </div>
     );
}
 
export default PopupNavbar;