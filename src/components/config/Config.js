import React, { useState } from "react";
import Themes from "./Themes";
import settings from "../../assets/images/setting.png";
import "./Config.css";

const Config = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <div
                className="config"
                onClick={() => setOpen((currentOpen) => !currentOpen)}
            >
                <img src={settings} alt="Config" />
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
