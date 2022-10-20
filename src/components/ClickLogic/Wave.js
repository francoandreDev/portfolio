import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const Wave = () => {
    const scrollY = useSelector((state) => state.scrollY);
    const [mouseX, setMouseX] = useState(null);
    const [mouseY, setMouseY] = useState(null);
    const [hasUserClick, setHasUserClick] = useState(false);
    const time = 0.8;
    const controlAnimation = `${time}s ease forwards`;
    const wave1 = { animation: `waves-growing-1 ${controlAnimation}` };
    const wave2 = { animation: `waves-growing-2 ${controlAnimation}` };
    const styleDefaultWaves = { opacity: 0 };

    useEffect(() => {
        const cripple = (event) => {
            if (mouseX !== event.clientX) setMouseX(event.clientX);
            if (mouseY !== event.clientY) setMouseY(event.clientY);
            setHasUserClick(true);
        };
        window.addEventListener("click", cripple);
        return () => {
            window.removeEventListener("click", cripple);
        };
    }, [mouseX, mouseY, hasUserClick]);

    useEffect(() => {
        if (!hasUserClick) return;
        setTimeout(() => {
            setHasUserClick(false);
        }, time * 1000); //break because the previous effect is running yet
    }, [hasUserClick]);

    return (
        <>
            {!hasUserClick ? null : (
                <div
                    className="wave"
                    id="wave-1"
                    style={{
                        top: `calc(${mouseY + scrollY}px - 7.5vw)`, // calc(cursor position - total width / 2)
                        left: `calc(${mouseX}px - 7.5vw)`, // calc(cursor position - total hight / 2)
                        zIndex: 1,
                        animation: `waving-growth ${controlAnimation}`
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
            )}
        </>
    );
};

export default Wave;
