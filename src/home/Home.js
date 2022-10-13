import React from "react";
import NavBar from "./header/NavBar";
import Main from "./main/Main";
import Footer from "./footer/Footer";
import "./Home.css";

const Home = () => {
    return (
        <div className="bg-home">
            <NavBar />
            <Main />
            <Footer />
        </div>
    );
};

export default Home;
