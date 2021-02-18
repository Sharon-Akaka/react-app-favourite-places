import React from 'react';

interface BodyProps {
    img: string,
    alt: string,
    title: string,
    cityName: string,
    countryName: string,
    mapLink: string;
    paragraph: string;
}
function Places(props: BodyProps) {
    console.log(props);
    return (
        <div className='containerHolder'>
            <div className='container'>
                <img src={props.img} alt={props.alt} />
                <h2>{props.cityName}, {props.countryName}(<a href={props.mapLink} rel="noreferrer" target="_blank">map link</a>)</h2>
                <h3>{props.title}</h3>
                <p>{props.paragraph}</p>
            </div>
        </div>

    );
}

export default Places;