import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

// AuthLayout: Header, footer
function AuthLayout() {
    return (
        <div className="contain-layout">
            <Header />
            <div className="contain-content">
                [Auth-Outlet]<Outlet />      {/* 로그인, 회원가입 내용 */}
            </div>
            <Footer />
        </div>
    );
}

export default AuthLayout;