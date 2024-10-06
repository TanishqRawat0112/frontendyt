import "./index.css";
import Navbar from "./components/FixedComp/Navbar";
import SideNavbar from "./components/FixedComp/SideNavbar";
import { useState } from "react";
import MainAuth from "./components/MainAuth";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Test from './components/FixedComp/Test';
import Channel from './components/ContentComp/Channel';
import CustomiseChannel from './components/CustomiseChannel/CustomiseChannel';
import UserOptions from './components/UserOptions/UserOptions';
import Login from "./components/Login";
import ChangePassword from "./components/UserOptions/ChangePassword";
import Home from "./components/Home Component/Home";
import Content from "./components/CustomiseChannel/Content";
function App() {
  const [login, setLogin] = useState(false);
  const [customiseChannel,setCustomiseChannel] = useState(false);
  const [userOptions,setUserOptions] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [studioState, setStudioState] = useState("");
  return (
    <>
    <Router>
      {!login ? (
              
        <div>
          <Navbar userOptions={userOptions} setUserOptions={setUserOptions} isUserLoggedIn={isUserLoggedIn} setIsUserLoggedIn={setIsUserLoggedIn} setLogin={setLogin} setStudioState={setStudioState} />
          {!customiseChannel ? <div className="app-layout">
            <SideNavbar setLogin={setLogin} setStudioState={setStudioState} />
            <div className="app-main-content">
              {userOptions && <UserOptions />}
                <Routes>
                      <Route path="/" element={<Home />} />
                      {/* <Route path="/login" element={<Login />} /> */}
                      <Route path="/shorts" element={<Test />} />
                      <Route path="/subscriptions" element={<Test />} />
                      <Route path="/user/channel" element={<Channel setCustomiseChannel={setCustomiseChannel} studioState={studioState} setStudioState={setStudioState} />} />
                      <Route path="/history" element={<Test />} />
                      <Route path="/playlist" element={<Test />} />
                      <Route path="/your-videos" element={<Test />} />
                      <Route path="/watch-later" element={<Test />} />
                      <Route path="/liked-videos" element={<Test />} />
                      <Route path="/change-password" element={<ChangePassword/>}/>
                      <Route path="/studio/content" element={<Content/>}/>

                      <Route path="/studio/customisation" element={<CustomiseChannel setCustomiseChannel={setCustomiseChannel} />} />
                  </Routes>
            </div>
          </div>
          : <CustomiseChannel setCustomiseChannel={setCustomiseChannel} />
            
          }
        </div>
                
      ) : (
        <Routes>
          <Route path="/login" element={<MainAuth setLogin={setLogin} setIsUserLoggedIn={setIsUserLoggedIn} />} />
          
        </Routes>
        
      )}
      </Router>
      
    </>
  );
}

export default App;
