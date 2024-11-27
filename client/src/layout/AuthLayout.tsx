import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

// AuthLayout: Header, Main, footer
function AuthLayout() {
    return (
        <div>
            <Header />
                <main className="main mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 wrapper">
                    [Auth-Outlet]<Outlet />      {/* 로그인, 회원가입 내용 */}
                </main>
            
            <Footer />
        </div>
    );
}

export default AuthLayout;