import "./index.css";
import Navbar from "./components/FixedComp/Navbar";
import SideNavbar from "./components/FixedComp/SideNavbar";
import { useState } from "react";
import MainAuth from "./components/MainAuth";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Test from './components/FixedComp/Test';
import Channel from './components/ContentComp/Channel';
function App() {
  const [login, setLogin] = useState(false);
  
  return (
    <>
      {!login ? (
              <Router>
        <div>
          <Navbar />
          <div className="app-layout">
            <SideNavbar setLogin={setLogin} />
            <div className="app-main-content">
                <Routes>
                      <Route path="/" element={<Test />} />
                      <Route path="/shorts" element={<Test />} />
                      <Route path="/subscriptions" element={<Test />} />
                      <Route path="/user/channel" element={<Channel />} />
                      <Route path="/history" element={<Test />} />
                      <Route path="/playlist" element={<Test />} />
                      <Route path="/your-videos" element={<Test />} />
                      <Route path="/watch-later" element={<Test />} />
                      <Route path="/liked-videos" element={<Test />} />
                  </Routes>
            </div>
          </div>
        </div>
                </Router>
      ) : (
        <MainAuth setLogin={setLogin} />
      )}
    </>
  );
}

export default App;
