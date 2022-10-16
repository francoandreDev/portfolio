import React from "react";

const Topic = ({ id, title, content }) => {
    return (
        <div className="topic">
            <div id="topicId"></div>
            <h2 id={id}>{title}</h2>
            <section>
                {content}
            </section>
        </div>
    );
};

export default Topic;
