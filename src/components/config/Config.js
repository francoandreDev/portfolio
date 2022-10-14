import React, { useState } from "react";
import Themes from "./Themes";
import "./Config.css";

const Config = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <div
                className="config"
                onClick={() => setOpen((currentOpen) => !currentOpen)}
            >
                <i className="fa-solid fa-gear"></i>
            </div>
            <section
                className="config-section"
                style={{ display: `${open ? "block" : "none"}` }}
            >
                <Themes />
            </section>
        </>
    );
};

export default Config;
