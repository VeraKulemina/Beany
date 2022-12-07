import React from "react";


function BeanCard({origin, name, description, image, roast}){

    return(
        <>
            <div className="cards">
                <img className="cardImage" src={image} alt="Error Loading Media" width="250"/>
                <p>{name}</p>
                <p>{origin}</p>
                <p>{description}</p>
                <p>{roast}</p>
            </div>
        </>
    )
}

export default BeanCard