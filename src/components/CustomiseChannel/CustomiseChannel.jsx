import { useState,useEffect } from "react";
import fetchUserData from "../../api/getUserData";
import SideBar from "./Sidebar";
import MainComp from "./MainComp";

const CustomiseChannel = () => {
    const [userInfo, setUserInfo] = useState([]);
    useEffect(()=>{
        const setData = async () => {
            let tempUserInfo = await fetchUserData();
            if(tempUserInfo.length>0){
                setUserInfo(tempUserInfo);
            }
        }
        setData(); 
    },[]);
    return ( 
        <div className="customise-channel-container">
            {/* SideBar */}
            <SideBar userInfo={userInfo} />
            {/* Main Content  */}
            <MainComp userInfo={userInfo} />
        </div>
     );
}
 
export default CustomiseChannel;