import React from 'react';
import {Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import UserLogin from './pages/Login';
import Captainlogin from './pages/Captainlogin';  
import UserSignup from './pages/UserSignup';
import CaptainSignup from './pages/CaptainSignup';
import Start from './pages/Start';
import UserProtectWrapper from './pages/UserProtectWrapper';
import UserLogout from './pages/UserLogout';
import CaptainHome from './pages/CaptainHome';
import CaptainProtectWrapper from './pages/CaptainProtectWrapper';
import CaptainLogout from './pages/CaptainLogout';



const App = () => {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/login" element={<UserLogin />} />
          <Route path="/signup" element={<UserSignup />} />
          <Route path="/captainlogin" element={<Captainlogin />} />
          <Route path="/captain-signup" element={<CaptainSignup />} />
          <Route path="/Home" element={
            <userProtectWrapper>
              <Home />    
            </userProtectWrapper>
          } />   
          <Route path="/user-logout" element={<UserLogout />} />
          <Route path="/captain-home" element={
            <CaptainProtectWrapper>
              <CaptainHome />    
            </CaptainProtectWrapper>
          } />
          <Route path="/captain-logout" element={<CaptainLogout />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
          
        </Routes>
    </div>
  );
};

export default App;