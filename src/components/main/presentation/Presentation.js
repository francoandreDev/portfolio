import React, { useState } from "react";
import profileDark from "../../../assets/images/presentation/profile-photo-dark.png";
import profileLight from "../../../assets/images/presentation/profile-photo-light.png";
import { useSelector } from "react-redux";
import ButtonImage from "./ButtonImage";
import { presentations, textsImages } from "../data/exports";

const Presentation = () => {
    const userName = useSelector((state) => state.userName);
    const theme = useSelector((state) => state.theme);

    const [showById, setShowById] = useState(null);
    const [showPresentationNumber, setShowPresentationNumber] = useState(0);

    const incrementNumberPresentation = () => {
        setShowPresentationNumber((current) =>
            current < presentations.length ? current + 1 : 0
        );
    };

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
                    <h2>
                        {showPresentationNumber === 0
                            ? "React Developer"
                            : presentations[showPresentationNumber - 1].h2}
                    </h2>
                    <p className="p-presentation">
                        {showPresentationNumber === 0
                            ? `Welcome ${userName}, my name is \n` +
                              "Franco André. \n" +
                              "I'm a full-stack programmer focus in work with React. \n"
                            : presentations[showPresentationNumber - 1].p}
                    </p>
                </article>
                <div
                    className="container-photo flex-center"
                    onClick={() => incrementNumberPresentation()}
                >
                    <img
                        src={
                            theme === "theme-dark" ? profileDark : profileLight
                        }
                        alt="profile"
                        className="profile"
                    />
                </div>
            </section>
            <aside>
                {textsImages
                    .filter((obj) => {
                        if (showById === null) return obj;
                        else return obj.id === showById;
                    })
                    .map((obj) => (
                        <ButtonImage
                            id={obj.id}
                            img={obj.img}
                            text={obj.text}
                            showById={showById}
                            setShowById={setShowById}
                            key={obj.id}
                        />
                    ))}
            </aside>
        </div>
    );
};

export default Presentation;
