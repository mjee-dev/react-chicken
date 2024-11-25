import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

// AuthLayout: Header, Main, footer
function AuthLayout() {
    return (
        <div className="contain-layout">
            <Header />
            <div>
                <main className="main">
                    [Auth-Outlet]<Outlet />      {/* 로그인, 회원가입 내용 */}
                </main>
            </div>
            <Footer />
        </div>
    );
}

export default AuthLayout;