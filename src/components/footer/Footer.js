import { useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import Message from "./Message";
import "./Footer.css";

const Footer = () => {
    const scrollY = useSelector((state) => state.scrollY);
    const [isBottom, setIsBottom] = useState(false);

    useEffect(() => {
        scrollY * 2.51 >= window.innerHeight
            ? setIsBottom(true)
            : setIsBottom(false);
    }, [scrollY]);

    const [show, setShow] = useState(true);
    const messages = ["I hope to work with you!", "Made by FrancoDev. 2022"];

    return (
        <footer>
            <Message message={messages[0]} show={!show} setShow={setShow} isBottom={isBottom}/>
            <Message message={messages[1]} show={show} setShow={setShow} isBottom={isBottom}/>
        </footer>
    );
};

export default Footer;
