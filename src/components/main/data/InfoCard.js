import React from "react";

const InfoCard = ({img, alt, text}) => {
    return (
        <section className="flex-center" style={{gap: "0.5vw"}}>
            <div className="image-topic">
                <img src={img} alt={alt} />
            </div>
            <p>{text}</p>
        </section>
    );
};

export default InfoCard;
