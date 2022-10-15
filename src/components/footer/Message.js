import React from "react";

const Message = ({ message, show, setShow }) => {
    return (
        <>
            <span
                onClick={() => setShow((show) => !show)}
                className={`${show ? "show" : "transparent"}`}
            >
                {show && message}
            </span>
        </>
    );
};

export default Message;
