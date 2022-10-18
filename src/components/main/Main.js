import { useSelector } from "react-redux";
import {aboutMe, technologies, experience, contactMe} from "./data/exports"
import Topic from "./Topic";
import React from "react";
import Presentation from "./presentation/Presentation";
import "./Main.css";

const Main = () => {
    const topicId = useSelector((state) => state.topicId);

    const topics = [
        { id: "aboutMe", title: "About me", content: aboutMe },
        { id: "technologies", title: "Technologies", content: technologies },
        { id: "experience", title: "Experience", content: experience },
        { id: "contactMe", title: "Contact me", content: contactMe }
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
                            content={obj.content}
                            key={obj.id}
                        />
                    );
                })}
        </main>
    );
};

export default Main;
