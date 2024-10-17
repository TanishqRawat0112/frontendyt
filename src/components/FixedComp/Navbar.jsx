import Search from './Search';
import icon from '../../assets/temp.jpeg';
import create from '../../assets/create.png';
import notif from '../../assets/notif.png';
import '../../index.css'; // Import the CSS file
import { useState,useEffect } from 'react';
import  fetchUserData  from '../../api/getUserData';
import { Link } from 'react-router-dom';
import PopupNavbar from './PopupNavbar';
const Navbar = ({userOptions,setUserOptions,isUserLoggedIn,setIsUserLoggedIn,setLogin,setStudioState}) => {
    const [userImage,setUserImage] = useState('');
    const [popup,setPopup] = useState(false);
    useEffect(()=>{
        const checkUserLoggedIn = async () => {
            const tempData = await fetchUserData();
            if(tempData){
                setIsUserLoggedIn(true);
            }
            if(isUserLoggedIn){
                const fetchUserImage = async () =>{
                const tempImage = await fetchUserData();
                setUserImage(tempImage[2]);
                }
                fetchUserImage();
            }
        }
        checkUserLoggedIn();
    },[isUserLoggedIn]);
    return (
        <div className="navbar-container">
            {/* Start Section */}
            <div className="navbar-start">
                <div className="navbar-home">
                    <svg xmlns='http://www.w3.org/2000/svg' height="32" viewBox='0 0 24 24' width="32" focusable="false" aria-hidden="true" className='hamburger-svg-css'>
                        <path d="M21 6H3V5h18v1Zm0 5H3v1h18v-1Zm0 6H3v1h18v-1Z" />
                    </svg>
                </div>
                <div className="navbar-logo-container">
                    <div className='navbar-logo-container-div'>
                    <img src={icon} alt="H" />
                    </div>
                    <div className="navbar-logo-text">Streami</div>
                </div>
            </div>

            {/* Center Section */}
            <div className="navbar-center">
                <Search placeholder={'search'} />
            </div>

            {/* End Section */}
            <div className="navbar-end">
                <div className="navbar-item" onClick={()=>setPopup(!popup)}>
                    <img src={create} alt="create" className='navbar-item-opt' />
                </div>
                {popup && <PopupNavbar popup={popup} setPopup={setPopup} />}
                <div className="navbar-item">
                <img src={notif} alt="notification" className='navbar-item-opt' />
                </div>
                <div className="navbar-item" >
                    {isUserLoggedIn ?
                    <img src={userImage} alt="user" className='navbar-item-userImage' onClick={()=>setUserOptions(!userOptions)} />
                : <div className='navbar-item-userImage-alt' onClick={()=>setLogin(true)} >
                    <Link to="/login">
                        Login
                    </Link>
                    </div>}
                </div>
            </div>
        </div>
    );
}

export default Navbar;
