import './App.css';
import React from 'react';
import MainLayout from "./layout/MainLayout";
import AuthLayout from "./layout/AuthLayout";
import Home from "./pages/Home";
import Join from "./pages/Join";
import Login from "./pages/Login";
import Map from "./pages/Map";
import MyInfo from "./pages/MyInfo";
import NotFound from "./pages/NotFound";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// 메인 컴포넌트

function App() {
  return (
    <Router>
      {/* 라우터 설정 */}
      <Routes>
        {/* MainLayout */}
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />}></Route>
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

      
      {/* <div className="wrapper mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <Home />
      </div> */}
    </Router>
  );
}

export default App;