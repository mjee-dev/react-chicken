import React from 'react';
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

function MainLayout() {
    return (
        <div className='contain-layout'>
            <Header />
            <div>
            <Sidebar />
            </div>
            <Footer />
        </div>
    );
}

export default MainLayout;