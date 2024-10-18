import React, { useState } from "react";
import { Link } from "react-router-dom";
import hitRequest from "../../api/hitRequest";
import './UserChannel.css';  // Import the CSS file

const UserChannel = ({ user, videos }) => {
  const [isSubscribed, setIsSubscribed] = useState(user.isSubscribed);
  const [subscribersCount, setSubscribersCount] = useState(user.subscribersCount);

  const handleSubscribe = async () => {
    const res = await hitRequest(`/subscriptions/c/${user._id}`, "POST");
    if (res) {
      setIsSubscribed((prev) => !prev);
      setSubscribersCount((prev) => (isSubscribed ? prev - 1 : prev + 1));
    }
  };

  return (
    <div className="channel-page">
      {user && (
        <>
          {user.coverImage && (
            <div className="cover-image">
              <img
                src={user.coverImage}
                alt="cover"
                className="cover-img"
              />
            </div>
          )}
          <div className="channel-header">
            <div className="image">
              <img
                src={user.avatar}
                alt="avatar"
                className="avatar-img"
              />
            </div>
            <div className="channel-info">
              <div className="channel-name">{user.fullname}</div>
              <div className="channel-stats">
                <div className="username">@{user.username}</div>
                <div className="subscribers">{subscribersCount} Subscribers</div>
                <div className="video-count">{videos.length} videos</div>
              </div>
              <div>
                more about this channel....
                <Link to="/user/channel" className="more-link">more</Link>
              </div>
              {!isSubscribed ? (
                <div
                  className="subscribe-button"
                  onClick={handleSubscribe}
                >
                  Subscribe
                </div>
              ) : (
                <div
                  className="subscribed-button"
                  onClick={handleSubscribe}
                >
                  Subscribed
                </div>
              )}
            </div>
          </div>
          <div className="channel-nav">
            <Link to={`/${user.username}/home`} className="nav-link">Home</Link>
            <Link to={`/${user.username}/video`} className="nav-link">Video</Link>
            <Link to={`/${user.username}/playlist`} className="nav-link">Playlist</Link>
            <Link to={`/${user.username}/community`} className="nav-link">Community</Link>
          </div>
          <div className="divider"></div>
        </>
      )}
    </div>
  );
};

export default UserChannel;
