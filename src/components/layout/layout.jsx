import React from 'react';
import {Outlet} from "react-router-dom";

import Header from "../header/header";

const Layout = () => {
    return (
        <div>
            <Header/>

            <Outlet/>

            <footer>
                2022 y
            </footer>
        </div>
    );
};

export default Layout;