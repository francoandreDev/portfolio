import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Config from "../config/Config";
import Footer from "../footer/Footer";
import NavBar from "../header/NavBar";
import Main from "../main/Main";
import "./Home.css";

const Home = () => {
    const theme = useSelector((state) => state.theme);
    const [mouseX, setMouseX] = useState(null);
    const [mouseY, setMouseY] = useState(null);
    const [scrollY, setScrollY] = useState(0);
    const time = 0.8;
    const controlAnimation = `${time}s ease forwards`;
    const wave1 = { animation: `waves-growing-1 ${controlAnimation}` };
    const wave2 = { animation: `waves-growing-2 ${controlAnimation}` };
    const styleDefaultWaves = { opacity: 0 };
    const [hasUserClick, setHasUserClick] = useState(false);

    const wavesElement = (
        <div
            className="wave"
            id="wave-1"
            style={{
                top: `calc(${mouseY+scrollY}px - 7.5vw)`, // calc(cursor position - total width / 2)
                left: `calc(${mouseX}px - 7.5vw)`, // calc(cursor position - total hight / 2)
                animation: `waves-growing ${controlAnimation}`
            }}
        >
            <div
                className="wave"
                id="wave-2"
                style={hasUserClick ? wave1 : styleDefaultWaves}
            >
                <div
                    className="wave"
                    id="wave-3"
                    style={hasUserClick ? wave2 : styleDefaultWaves}
                ></div>
            </div>
        </div>
    );

    useEffect(() => {
        const cripple = (event) => {
            if (mouseX !== event.clientX) setMouseX(event.clientX);
            if (mouseY !== event.clientY) setMouseY(event.clientY);
            setHasUserClick(true);
        };
        window.addEventListener("click", cripple);
        setScrollY(window.scrollY);
        return () => {
            window.removeEventListener("click", cripple);
        };
    }, [mouseX, mouseY, hasUserClick, scrollY]);

    useEffect(() => {
        if (!hasUserClick) return;
        setTimeout(() => {
            setHasUserClick(false);
        }, time * 1000); //break because the previous effect is running yet
    }, [hasUserClick]);

    return (
        <div className={`bg-home ${theme}`}>
            {hasUserClick && wavesElement}
            <NavBar />
            <Main />
            <Footer />
            <Config />
        </div>
    );
};

export default Home;
