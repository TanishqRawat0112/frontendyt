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
function App() {
  const [login, setLogin] = useState(false);
  const [customiseChannel,setCustomiseChannel] = useState(false);
  const [userOptions,setUserOptions] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  return (
    <>
      {!login ? (
              <Router>
        <div>
          <Navbar userOptions={userOptions} setUserOptions={setUserOptions} isUserLoggedIn={isUserLoggedIn} setLogin={setLogin} />
          {!customiseChannel ? <div className="app-layout">
            <SideNavbar setLogin={setLogin} />
            <div className="app-main-content">
              {userOptions && <UserOptions />}
                <Routes>
                      <Route path="/" element={<Test />} />
                      {/* <Route path="/login" element={<Login />} /> */}
                      <Route path="/shorts" element={<Test />} />
                      <Route path="/subscriptions" element={<Test />} />
                      <Route path="/user/channel" element={<Channel setCustomiseChannel={setCustomiseChannel} />} />
                      <Route path="/history" element={<Test />} />
                      <Route path="/playlist" element={<Test />} />
                      <Route path="/your-videos" element={<Test />} />
                      <Route path="/watch-later" element={<Test />} />
                      <Route path="/liked-videos" element={<Test />} />
                  </Routes>
            </div>
          </div>
          : <CustomiseChannel setCustomiseChannel={setCustomiseChannel} />
            
          }
        </div>
                </Router>
      ) : (
        <MainAuth setLogin={setLogin} setIsUserLoggedIn={setIsUserLoggedIn} />
      )}
      
    </>
  );
}

export default App;
