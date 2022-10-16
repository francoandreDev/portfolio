import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setScrollY } from "../../store/slices/scrollY.slice";
import { Link } from "react-scroll";
import "./NavBar.css";

const NavBar = () => {
    const dispatch = useDispatch();
    const scrollY = useSelector(state=>state.scrollY)

    useEffect(() => {
        const updateScroll = () => {
            if (window.scrollY !== scrollY) {
                dispatch(setScrollY(window.scrollY))
            }
        };
        window.addEventListener("scroll", updateScroll);
        return () => {
            window.removeEventListener("scroll", updateScroll);
        };
    }, [dispatch, scrollY]);
    return (
        <header id="header" style={scrollY === 0 ? { height: "12vh" } : {}}>
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
