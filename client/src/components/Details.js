import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"



function Details() {
    const [bean, setBean] = useState("")
    const { id } = useParams()



    useEffect(() => {
        fetch(`/beans/${id}`)
            .then((r) => r.json())
            .then((bean) => {
                setBean(bean);
            });
    }, [id]);

    const { name, origin, description, roast, image} = bean



    return (
        <>
            <div className="cards">
                <img className="cardImage" src={image} alt="Error Loading Media" width="250"/>
                <h1>{name}</h1>
                <p>Country of Origin: {origin}</p>
                <p>Description: {description}</p>
                <p>Roast: {roast}</p>
                <Link to={`/beans`}><button className="abovePage">Return</button></Link>
            </div>       
        </>
    )
}

export default Details