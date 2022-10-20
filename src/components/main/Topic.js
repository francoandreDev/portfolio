import React from "react";

const Topic = ({ title, content }) => {
    return (
        <div className="topic">
            <h2>{title}</h2>
            <section className="flex-column-around">{content}</section>
        </div>
    );
};

export default Topic;
