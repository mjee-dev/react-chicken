import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from 'react-router-dom';

// MainLayout : Header, main, Footer
function MainLayout() {
    return (
        <div>
            <Header />
            <div className='flex w-full flex-col border-opacity-50'>
                <main className='main'>
                    [main-Outlet]<Outlet />  {/* 이 자리에 다른 페이지들이 표시 됨 */}
                </main>
            </div>
            <Footer />
        </div>
    );
}

export default MainLayout;