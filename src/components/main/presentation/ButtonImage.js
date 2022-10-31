import React, { useState } from "react";

const ButtonImage = ({ id, img, text, showById, setShowById }) => {
    const [show, setShow] = useState(false);

    const changeShow = () => {
        setShow((show) => !show);
        showById === id ? setShowById(null) : setShowById(id);
    };

    return (
        <div className="button-image">
            <button className="container-demo flex-center" onClick={() => changeShow()}>
                <img
                    src={img}
                    alt="demo"
                    style={{
                        cursor: "pointer"
                    }}
                    className={show ? "f-color" : "f-gray"}
                />
            </button>
            <p
                className={show ? "show-width" : "hide-width"}
                style={show ? { display: "block" } : { display: "none", overflow: "hidden" }}
            >
                {text}
            </p>
        </div>
    );
};

export default ButtonImage;
