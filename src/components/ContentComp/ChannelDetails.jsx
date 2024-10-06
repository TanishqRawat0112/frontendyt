import { useState } from "react";
import {Link} from 'react-router-dom';

const UserDetails = ({userData,setCustomiseChannel}) => {
    const [isPlaylistSelected, setIsPlaylistSelected] = useState(true);
    const [isCommunitySelected, setIsCommunitySelected] = useState(false);

    
    // const [isSearchSelected, setIsSearchSelected] = useState(false);
    return (
       <div className="channel-details-main-content">
            <div className="channel-details">
                <img src={userData[3]} alt="coverImager" className="channel-details-cover" />
                <div className="channel-details-info">
                    <div className="channel-details-avatar">
                        <img src={userData[2]} alt="Avatar" />
                    </div>
                    <div className="channel-details-info-about">
                        <h1 className="channel-details-info-about-fullname">{userData[1]}</h1>
                        <p className="channel-details-info-about-username">@{userData[0]} • 1M subscribers</p>
                        <p style={{color:'rgb(159, 158, 158)'}}>More about this channel ...<span style={{color:'white'}}>more</span></p>

                        <div className="channel-details-info-about-buttons">
                            <div className="customise-channel">
                                <Link to="/studio/customisation" style={{ textDecoration: 'none', color:'inherit' }}>
                                    Customise Channel
                                </Link>
                            </div>
                            <div className="manage-videos">
                                Manage Videos
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="channel-details-options">
                <div className="channel-details-options-container">
                    <div className={`${isPlaylistSelected ? "channel-details-options-playlists-selected":"channel-details-options-playlists"}`}
                    onClick={()=>{
                        setIsPlaylistSelected(true);
                        setIsCommunitySelected(false);
                    }}
                    >
                        Playlists
                    </div>
                    <div className={`${isCommunitySelected ? "channel-details-options-community-selected":"channel-details-options-community"}`} 
                        onClick={()=>{
                            setIsPlaylistSelected(false);
                            setIsCommunitySelected(true);
                        }}
                    >
                        Community
                    </div>
                    <div className="channel-details-options-search">
                        SEARCH
                    </div>
                </div>
            </div>
       </div>  
     );
}
 
export default UserDetails;