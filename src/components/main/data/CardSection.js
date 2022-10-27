import React from 'react';
import InfoCard from './InfoCard';


const CardSection = ({title, data}) => {

    return (
        <section className='flex-column-center border card' style={{gap: "2vh", width: "fit-content", alignItems: "flex-start"}}>
            <h4 style={{marginBottom: "2vh", textAlign: "center", width: "100%"}}>{title}</h4>
            {data.map(element=><InfoCard icon={element.icon} text={element.text} key={element.id}/>)}
        </section>
    );
};

export default CardSection;