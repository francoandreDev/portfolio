import React from "react";
import profileDark from "../../../assets/images/profile-photo-dark.png";
import profileLight from "../../../assets/images/profile-photo-light.png";
import { useSelector } from "react-redux";
import ButtonImage from "./ButtonImage";
import { textsImages } from "../data/exports";

const Presentation = () => {
    const userName = useSelector((state) => state.userName);
    const theme = useSelector((state) => state.theme)

    return (
        <div
            className="presentation"
            style={{
                position: "relative",
                zIndex: 2,
                backgroundColor: "rgb(33, 38, 44)"
            }}
        >
            <h1>Presentation</h1>
            <section className="content">
                <article className="content">
                    <h2>React Developer</h2>
                    <p className="p-presentation">
                        Welcome {userName}, my name is {"\n"}
                        Franco André. {"\n"}
                        I'm a full-stack programmer focus in work with React.{" "}
                        {"\n"}
                    </p>
                </article>
                <div className="container-photo">
                    <img src={theme === "theme-dark" ? profileDark : profileLight } alt="profile" className="profile" />
                </div>
            </section>
            <aside>
                {textsImages.map((obj) => (
                    <ButtonImage img={obj.img} text={obj.text} key={obj.id} />
                ))}
            </aside>
        </div>
    );
};

export default Presentation;
