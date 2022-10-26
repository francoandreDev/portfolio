import React from 'react';
import InfoCard from './InfoCard';


const CardSection = ({title, data}) => {

    return (
        <section className='flex-column-center border card' style={{gap: "2vh", width: "fit-content", alignItems: "flex-start"}}>
            <h4 style={{marginBottom: "2vh", textAlign: "center", width: "100%"}}>{title}</h4>
            {data.map(element=><InfoCard img={element.img} alt={element.alt} text={element.text} key={element.id}/>)}
        </section>
    );
};

export default CardSection;