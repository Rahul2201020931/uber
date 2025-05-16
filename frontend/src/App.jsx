import React from 'react';
import {Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import UserLogin from './pages/Login';
import Captainlogin from './pages/Captainlogin';  
import UserSignup from './pages/UserSignup';
import CaptainSignup from './pages/CaptainSignup';



const App = () => {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<UserLogin />} />
          <Route path="/signup" element={<UserSignup />} />
          <Route path="/captainlogin" element={<Captainlogin />} />
          <Route path="/captain-signup" element={<CaptainSignup />} />

        </Routes>
    </div>
  );
};

export default App;