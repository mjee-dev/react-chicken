import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from 'react-router-dom';

// MainLayout : Header, main, Footer
function MainLayout() {
    return (
        <div>
            <Header />
                <main className='main mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 wrapper'>
                    [main-Outlet]
                    <Outlet />  {/* 이 자리에 다른 페이지들이 표시 됨 */}
                </main>
            <Footer />
        </div>
    );
}

export default MainLayout;