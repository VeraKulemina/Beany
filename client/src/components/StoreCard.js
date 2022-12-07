import React from "react";


function StoreCard(name, img, address){

    return(
        <>
            <div className="cards">
                <img className="cardImage" src={img} alt="Error Loading Media" width="250"/>
                <p>{name}</p>
                <p>{address}</p>
            </div>
        </> 
    )
}

export default StoreCard