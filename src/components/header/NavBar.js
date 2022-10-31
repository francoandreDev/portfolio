import { useDispatch, useSelector } from "react-redux";
import { setScrollY } from "../../store/slices/scrollY.slice";
import React, { useEffect, useRef, useState } from "react";
import ElementBar from "./ElementBar";
import "./NavBar.css";

const NavBar = () => {
    const scrollY = useSelector((state) => state.scrollY);
    const headerRef = useRef();
    const dispatch = useDispatch();
    const [selectedElement, setSelectedElement] = useState(null);
    const [isOpenMenu, setIsOpenMenu] = useState(true);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const updateScroll = () => {
            if (window.scrollY !== scrollY) {
                dispatch(setScrollY(window.scrollY));
                if (!isMobile) {
                    scrollY < 30 ? setIsOpenMenu(true) : setIsOpenMenu(false);
                }
            }
        };
        window.addEventListener("scroll", updateScroll);
        return () => {
            window.removeEventListener("scroll", updateScroll);
        };
    }, [dispatch, scrollY, isMobile]);

    useEffect(() => {
        const resize = () => {
            window.innerWidth > 900 ? setIsMobile(false) : setIsMobile(true);
        };
        window.addEventListener("resize", resize);
        return () => {
            window.removeEventListener("resize", resize);
        };
    }, []);

    useEffect(() => {
        if (isMobile) {
            headerRef.current.style.minHeight = "80vh";
            if (!isOpenMenu) {
                headerRef.current.style.left = "0";
            } else {
                headerRef.current.style.left = "-100vw";
            }
        } else {
            //* reset style by js
            headerRef.current.style.left = "0";
            headerRef.current.style.minHeight = "auto";
            isOpenMenu
                ? (headerRef.current.style.height = "14vh")
                : (headerRef.current.style.height = "5px");
        }
    }, [isMobile, isOpenMenu, headerRef.current?.style]);

    useEffect(() => {
        window.innerWidth > 900 ? setIsMobile(false) : setIsMobile(true);
    }, [isMobile, isOpenMenu]);

    const links = [
        {
            id: "aboutMe",
            text: "About me",
            select: selectedElement,
            setSelect: setSelectedElement
        },
        {
            id: "technologies",
            text: "Technologies",
            select: selectedElement,
            setSelect: setSelectedElement
        },
        {
            id: "experience",
            text: "Experience",
            select: selectedElement,
            setSelect: setSelectedElement
        },
        {
            id: "contactMe",
            text: "Contact me",
            select: selectedElement,
            setSelect: setSelectedElement
        }
    ];

    return (
        <>
            <div className="header-static">
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
                    {links.map((obj) => (
                        <ElementBar
                            key={obj.id}
                            id={obj.id}
                            text={obj.text}
                            selectedElement={obj.select}
                            setSelectedElement={obj.setSelect}
                        />
                    ))}
                </ul>
            </header>
        </>
    );
};

export default NavBar;
