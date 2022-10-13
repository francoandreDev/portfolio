import React from "react";
import { useSelector } from "react-redux";
import Config from "../config/Config";
import Footer from "../footer/Footer";
import NavBar from "../header/NavBar";
import Main from "../main/Main";
import "./Home.css";

const Home = () => {

    const theme = useSelector(state => state.theme)

    return (
        <div className={`bg-home ${theme}`}>
            <NavBar />
            <Main />
            <Footer />
            <Config />
        </div>
    );
};

export default Home;
