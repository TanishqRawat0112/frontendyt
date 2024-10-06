import { Link } from 'react-router-dom';
import Test from '../Test';
import Channel from '../ContentComp/Channel';
import '../../index.css'; // Import the CSS file

const SideNavbar = ({setLogin,setStudioState}) => {
    // console.log("User Info in Side Navbar ",userInfo);
    return (
        // <Router>
            <div className="side-navbar">
                {/* Section 1: Main Navigation */}
                <div className="section-navigation">
                    <div className="menu-item">
                        <Link to="/" style={{ textDecoration: 'none' }}>
                            <div className="menu-item-content">
                                <span>🏠</span> {/* Icon placeholder */}
                                <span>Home</span>
                            </div>
                        </Link>
                    </div>
                    <div className="menu-item">
                        <Link to="/shorts" style={{ textDecoration: 'none' }}>
                            <div className="menu-item-content">
                                <span>⚡</span> {/* Icon placeholder */}
                                <span>Shorts</span>
                            </div>
                        </Link>
                    </div>
                    <div className="menu-item" onClick={()=>setLogin(true)}>
                        <Link to="/subscriptions" style={{ textDecoration: 'none' }}>
                            <div className="menu-item-content">
                                <span>📺</span> {/* Icon placeholder */}
                                <span>Subscriptions</span>
                            </div>
                        </Link>
                    </div>
                </div>

                {/* Divider */}
                <div className="divider" />

                {/* Section 2: Library */}
                <div className="section-library">
                    <div className="menu-item" onClick={()=>setStudioState("customisation")}>
                        <Link to="/user/channel" style={{ textDecoration: 'none' }}>
                            <div className="menu-item-content">
                                <span>👤</span>
                                <span>Your Channel</span>
                            </div>
                        </Link>
                    </div>
                    <div className="menu-item" onClick={()=>setLogin(true)}>
                        <Link to="/history" style={{ textDecoration: 'none' }}>
                            <div className="menu-item-content">
                                <span>🕒</span>
                                <span>History</span>
                            </div>
                        </Link>
                    </div>
                    <div className="menu-item hidden" onClick={()=>setLogin(true)}>
                        <Link to="/playlist" style={{ textDecoration: 'none' }}>
                            <div className="menu-item-content">
                                <span>🎶</span>
                                <span>Playlists</span>
                            </div>
                        </Link>
                    </div>
                    <div className="menu-item">
                        <Link to="/" onClick={()=>setLogin(true)} style={{ textDecoration: 'none' }}>
                            <div className="menu-item-content">
                                <span>🎥</span>
                                <span>Your Videos</span>
                            </div>
                        </Link>
                    </div>
                    <div className="menu-item">
                        <Link to="/watch-later" onClick={()=>setLogin(true)} style={{ textDecoration: 'none' }}>
                            <div className="menu-item-content">
                                <span>⏳</span>
                                <span>Watch Later</span>
                            </div>
                        </Link>
                    </div>
                    <div className="menu-item">
                        <Link to="/liked-videos" onClick={()=>setLogin(true)} style={{ textDecoration: 'none' }}>
                            <div className="menu-item-content">
                                <span>👍</span>
                                <span>Liked Videos</span>
                            </div>
                        </Link>
                    </div>
                </div>

                
            </div>
        // </Router>
    );
}

export default SideNavbar;
