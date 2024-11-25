import './App.css';
import React from 'react';
import MainLayout from "./layout/MainLayout";
import AuthLayout from "./layout/AuthLayout";
import Home from "./component/Home";
import Join from "./component/Join";
import Login from "./component/Login";
import Map from "./component/Map";
import MyInfo from "./component/MyInfo";
import NotFound from "./component/NotFound";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// 메인 컴포넌트

function App() {
  return (
    <Router>
      {/* 라우터 설정 */}
      <Routes>
        {/* MainLayout */}
        <Route path="/" element={<MainLayout />}>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/map" element={<Map />}></Route>
          <Route path="/myInfo/:userId" element={<MyInfo />}></Route>
          <Route path="*" element={<NotFound />} />   {/* 404 처리 */}
        </Route>

        {/* AuthLayout */}
        <Route path="/" element={<AuthLayout />}>
          <Route path="/join" element={<Join />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Route>
      </Routes>

      
      <div className="wrapper">
        <Home />
      </div>
    </Router>
  );
}

export default App;