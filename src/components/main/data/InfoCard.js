import React from "react";

const InfoCard = ({ icon, text }) => {
    return (
        <section className="flex-center" style={{ gap: "0.5vw" }}>
            <i className={icon}></i>
            <p>{text}</p>
        </section>
    );
};

export default InfoCard;
