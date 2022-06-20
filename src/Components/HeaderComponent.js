import React from "react";
import { NavLink } from "react-router-dom";

const HeaderComponent = () => {
    return (
        <header>
            <a href="#" >My WebApp</a>
            <nav>
                <ul>
                    <li><NavLink to= "/">Home</NavLink></li>
                    <li><NavLink to="/about">About Us</NavLink></li>
                    <li><NavLink to = "/Contact">Contact Us</NavLink></li>
                    <li><NavLink to = "/example">example screen</NavLink></li>
                </ul>
            </nav>
        </header>
    );
}

export default HeaderComponent;