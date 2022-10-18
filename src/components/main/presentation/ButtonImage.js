import React, { useState } from "react";

const ButtonImage = ({ img, text }) => {
    const [show, setShow] = useState(false);

    return (
        <div>
            <button
                className="container-demo"
                onClick={() => setShow((show) => !show)}
            >
                <img src={img} alt="demo" style={{ cursor: "pointer" }} />
            </button>
            {show && text}
        </div>
    );
};

export default ButtonImage;
