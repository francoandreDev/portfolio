import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setScrollY } from "../../store/slices/scrollY.slice";
import "./NavBar.css";
import ElementBar from "./ElementBar";

const NavBar = () => {
    const dispatch = useDispatch();
    const scrollY = useSelector((state) => state.scrollY);
    const [selectedElement, setSelectedElement] = useState(null);

    useEffect(() => {
        const updateScroll = () => {
            if (window.scrollY !== scrollY) {
                dispatch(setScrollY(window.scrollY));
            }
        };
        window.addEventListener("scroll", updateScroll);
        return () => {
            window.removeEventListener("scroll", updateScroll);
        };
    }, [dispatch, scrollY]);

    return (
        <>
            <div
                className="header-static"
                style={{
                    position: "relative",
                    top: 0,
                    left: 0,
                    width: "100vw",
                    height: "12vh",
                    backgroundColor: "transparent"
                }}
            ></div>
            <header id="header" style={scrollY > 40 ? {} : { height: "12vh" }}>
                <ul>
                    <ElementBar
                        id={"aboutMe"}
                        text={"About me"}
                        selectedElement={selectedElement}
                        setSelectedElement={setSelectedElement}
                    />
                    <ElementBar
                        id={"technologies"}
                        text={"Technologies"}
                        selectedElement={selectedElement}
                        setSelectedElement={setSelectedElement}
                    />
                    <ElementBar
                        id={"experience"}
                        text={"Experience"}
                        selectedElement={selectedElement}
                        setSelectedElement={setSelectedElement}
                    />
                    <ElementBar
                        id={"contactMe"}
                        text={"Contact me"}
                        selectedElement={selectedElement}
                        setSelectedElement={setSelectedElement}
                    />
                </ul>
            </header>
        </>
    );
};

export default NavBar;
