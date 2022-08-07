import React from 'react';
import {Link} from "react-router-dom";

import './header.css'
import {CartBlock} from "../cart-block";




const Header = () => {
    return (
        <div className="header">
            <div className="wrapper">
                <Link to="/" className="header_store_title">Game store</Link>
            </div>
            <div className="wrapper header_cart_btn_wrapper">
                <CartBlock/>
            </div>
        </div>
    );
};

export default Header;