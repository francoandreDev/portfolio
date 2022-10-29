import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setScrollY } from "../../store/slices/scrollY.slice";
import { setScrollX } from "../../store/slices/scrollX.slice";
import "./NavBar.css";
import ElementBar from "./ElementBar";

const NavBar = () => {
    const dispatch = useDispatch();
    const scrollY = useSelector((state) => state.scrollY);
    const scrollX = useSelector((state) => state.scrollX);
    const [selectedElement, setSelectedElement] = useState(null);
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const headerRef = useRef();

    useEffect(() => {
        const updateScroll = () => {
            if (window.scrollY !== scrollY) {
                dispatch(setScrollY(window.scrollY));
                scrollY > 40 ? setIsOpenMenu(true) : setIsOpenMenu(false);
            }
            //!please get the x size of the screen not the scroll
            if (window.innerWidth !== scrollX) {
                dispatch(setScrollX(window.innerWidth));
                scrollX < 900 ? setIsOpenMenu(false) : setIsOpenMenu(true);
            }
        };
        window.addEventListener("scroll", updateScroll);
        return () => {
            window.removeEventListener("scroll", updateScroll);
        };
    }, [dispatch, scrollY, scrollX]);

    useEffect(() => {
        if (scrollX < 900) {
            if (!isOpenMenu) {
                headerRef.current.style.height = "80vh";
                headerRef.current.style.width = "100vw";
                headerRef.current.style.left = "0";
            }
            if (isOpenMenu) {
                headerRef.current.style.top = "0";
                headerRef.current.style.left = "-100vw";
            }
        }
        if (scrollX >= 900) {
            headerRef.current.style.height = "auto";
        }
    }, [scrollX, isOpenMenu, headerRef.current?.style]);

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
            >
                {isOpenMenu ? (
                    <i
                        className="fa-solid fa-bars menu-mobile"
                        onClick={() => setIsOpenMenu(false)}
                    ></i>
                ) : (
                    <i
                        className="fa-solid fa-xmark menu-mobile"
                        onClick={() => setIsOpenMenu(true)}
                    ></i>
                )}
            </div>
            <header id="header" ref={headerRef}>
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
