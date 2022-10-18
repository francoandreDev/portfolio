import React, { useState } from "react";

const ButtonImage = ({ img, text }) => {
    const [show, setShow] = useState(false);

    return (
        <div className="button-image">
            <button
                className="container-demo"
                onClick={() => setShow((show) => !show)}
            >
                <img
                    src={img}
                    alt="demo"
                    style={{ cursor: "pointer"}}
                    className={show ? "f-color" : "f-gray"}
                />
            </button>
            <p className={show ? "show-height" : "hide-height"}>{text}</p>
        </div>
    );
};

export default ButtonImage;
