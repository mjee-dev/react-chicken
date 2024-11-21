import './App.css';
import React from 'react';
import MainLayout from "./layout/MainLayout";
import AuthLayout from "./layout/AuthLayout";
import Home from "./component/Home";
import Join from "./component/Join";
import Login from "./component/Login";
import Map from "./component/Map";
import MyInfo from "./component/MyInfo";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

// 메인 컴포넌트
function NotFound() {
  return <h2>페이지를 찾을 수 없습니다. (404)</h2>
}

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

      <div className="text-3xl font-bold underline">
        Hello, Tailwind!
      </div>

      <div>
        {/* 네비게이션 링크 */}
        <nav>
          <ul>
            <li><Link to="/">홈</Link></li>   {/* a 링크 대신 link 로 브라우저의 페이지 리로드 없이 라우팅 처리 */}
            <li><Link to="/join">회원가입</Link></li>
            <li><Link to="/login">로그인</Link></li>
            <li><Link to="/map">지도</Link></li>
            <li><Link to="/myInfo/:id">내 정보</Link></li>
          </ul>
        </nav>

        {/* 라우터 설정 */}
        <Routes>
          <Route path="/" element={<Home />} />    {/* URL 경로와 해당 경로에서 렌더링할 컴포넌트를 설정, JSX형태로 */}
          <Route path="/join" element={<Join />} />
          <Route path="/login" element={<Login />} />
          <Route path="/map" element={<Map />} />
          <Route path="/myInfo/:id" element={<MyInfo />} />   {/* 동적 경로 */}
          <Route path="*" element={<NotFound />} />   {/* 404 처리 */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;