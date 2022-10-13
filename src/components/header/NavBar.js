import React from "react";
import {Link} from "react-scroll"
import "./NavBar.css";

const NavBar = () => {
    return (
        <header id="header">
            <ul>
                <li>
                    <Link to="aboutMe" smooth={true} duration={450}>
                        About me
                    </Link>
                </li>
                <li>
                    <Link to="technologies" smooth={true} duration={450}>
                        Technologies
                    </Link>
                </li>
                <li>
                    <Link to="experience" smooth={true} duration={450}>
                        Experience
                    </Link>
                </li>
                <li>
                    <Link to="contactMe" smooth={true} duration={450}>
                        Contact me
                    </Link>
                </li>
            </ul>
        </header>
    );
};

export default NavBar;
