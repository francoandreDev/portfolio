import React, { useState } from "react";
import Message from "./Message";
import "./Footer.css";

const Footer = () => {
    const [show, setShow] = useState(true);
    const messages = ["I hope to work with you!", "Made by FrancoDev. 2022"];

    return (
        <footer>
            <Message message={messages[0]} show={show} setShow={setShow} />
            <Message message={messages[1]} show={!show} setShow={setShow} />
        </footer>
    );
};

export default Footer;
