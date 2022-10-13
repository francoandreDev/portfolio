import React from "react";
import { useSelector } from 'react-redux';

const Footer = () => {

    const theme = useSelector(state => state.theme)

    return (
        <footer className = {`${theme}`}>
            <span>I hope work with you!</span>
        </footer>
    );
};

export default Footer;
