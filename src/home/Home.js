import { useState } from "react";

import "./Home.css";

import laptop from "../assets/laptop.png";
import rocket from "../assets/laptop-rocket.png";

function Home() {
    const [logoTitle, setLogoTitle] = useState(laptop);

    return (
        <div className="bg">
            <aside className="menu-bg">
                <section className="section-title">
                    <img
                        onMouseOver={() => setLogoTitle(laptop)}
                        onClick={() => setLogoTitle(rocket)}
                        src={logoTitle}
                        alt="laptop"
                        className="laptop-img"
                    />
                    <h1 className="title">Franco André</h1>
                </section>
                <div className="format-menu">
                    <nav className="nav-page">
                        <ul className="pages">
                            <li className="page" id="home">
                                <h2 className="p">Home</h2>
                            </li>
                            <li className="page" id="About-me">
                                <h2 className="p">About me</h2>
                            </li>
                            <li className="page" id="Projects">
                                <h2 className="p">Projects</h2>
                            </li>
                            <li className="page" id="Contact me">
                                <h2 className="p">Contact me</h2>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="geometry-gradients">
                    <div className="circle"></div>
                    <div className="square"></div>
                    <div className="triangle"></div>
                </div>
            </aside>
            <main className="main-bg"></main>
        </div>
    );
}

export default Home;
