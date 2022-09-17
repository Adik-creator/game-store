import React from 'react';
import {Outlet} from "react-router-dom";

import Header from "../header/header";
import './layout.css'

const Layout = () => {
    return (
        <div className="main-wrapper">
            <Header/>

            <main className="container">
                <Outlet/>
            </main>

            <footer className="footer">
                New games.
            </footer>
        </div>
    );
};

export default Layout;