import Search from './Search';
import icon from '../../assets/temp.jpeg';
import create from '../../assets/create.png';
import notif from '../../assets/notif.png';
import '../../index.css'; // Import the CSS file
import { useState,useEffect } from 'react';
import  fetchUserData  from '../../api/getUserData';

const Navbar = () => {
    const [userImage,setUserImage] = useState('');
    useEffect(()=>{
        const fetchUserImage = async () =>{
            const tempImage = await fetchUserData();
            setUserImage(tempImage[2]);
        }
        fetchUserImage();
    },[]);
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
                <div className="navbar-item">
                    <img src={create} alt="create" className='navbar-item-opt' />
                </div>
                <div className="navbar-item">
                <img src={notif} alt="notification" className='navbar-item-opt' />
                </div>
                <div className="navbar-item">
                    <img src={userImage} alt="user" className='navbar-item-userImage'/>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
