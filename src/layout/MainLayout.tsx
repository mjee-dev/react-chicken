import React from 'react';
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { Outlet } from 'react-router-dom';

// MainLayout : Header, Sidebar, main, Footer
function MainLayout() {
    return (
        <div className='contain-layout'>
            <Header />
            <div>
                <Sidebar />
                <main className='main'>
                    [main-Outlet]<Outlet />  {/* 이 자리에 다른 페이지들이 표시 됨 */}
                </main>
            </div>
            <Footer />
        </div>
    );
}

export default MainLayout;