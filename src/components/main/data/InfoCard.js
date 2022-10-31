import React from "react";

const InfoCard = ({ icon, text }) => {
    return (
        <section className="flex-center">
            <i className={icon}></i>
            <p>{text}</p>
        </section>
    );
};

export default InfoCard;
