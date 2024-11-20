import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useParams } from 'react-router-dom';

// 메인 컴포넌트

function Home() {
  return <h2>홈 화면</h2>
}

function Join() {
  return <h2>회원 가입 화면</h2>
}

function Login() {
  return <h2>로그인 화면</h2>
}

function Map() {
  return <h2>map 화면</h2>
}

function MyInfo() {
  const { id } = useParams();
  return <h2>내 정보 화면: {id}</h2>
}

function NotFound() {
  return <h2>페이지를 찾을 수 없습니다. (404)</h2>
}

function App() {
  return (
    <Router>
      <div>
        {/* 네비게이션 링크 */}
        <nav>
          <ul>
            <li><Link to="/">홈</Link></li>   {/* a 링크 대신 link 로 브라우저의 페이지 리로드 없이 라우팅 처리 */}
            <li><Link to="/join">회원가입</Link></li>
            <li><Link to="/login">로그인</Link></li>
            <li><Link to="/map">지도</Link></li>
            <li><Link to="/myInfo">내 정보</Link></li>
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