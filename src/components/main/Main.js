import React from "react";
import { useSelector } from "react-redux";
import "./Main.css";
import Presentation from "./Presentation";
import Topic from "./Topic";

const Main = () => {
    const topicId = useSelector((state) => state.topicId);

    const aboutMe = <p>Hello world</p>;
    const topics = [
        { id: "aboutMe", title: "About me", content: aboutMe },
        { id: "technologies", title: "Technologies", content: aboutMe },
        { id: "experience", title: "Experience", content: aboutMe },
        { id: "contactMe", title: "Contact me", content: aboutMe }
    ];

    return (
        <main>
            <Presentation />
            {topics
                .filter((obj) => obj.id === topicId)
                .map((obj) => {
                    return (
                        <Topic
                            id={obj.id}
                            title={obj.title}
                            content={aboutMe}
                            key={obj.id}
                        />
                    );
                })}
        </main>
    );
};

export default Main;
