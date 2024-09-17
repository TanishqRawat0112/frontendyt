const UserDetails = ({userData}) => {
    return (
       <div className="channel-details-main-content">
            <div className="channel-details">
                <img src={userData[2]} alt="Avatar" />
            </div>
            <div className="channel-details-options">
                PLAYLIST
                COMMUNITY
                SEARCH
            </div>
       </div>  
     );
}
 
export default UserDetails;