import React from "react";

const Message = ({ message, show, setShow }) => {
    return (
        <>
            <p
                onClick={() => setShow((show) => !show)}
                className={`${show ? "show" : "transparent"}`}
            >
                {show && message}
            </p>
        </>
    );
};

export default Message;
