import React from "react";
import { Link } from "react-router-dom"



function BeanCard({id, name, image, handleDeleteBean, shop, address}){

    function handleDelete(){
        fetch(`beans/${id}`, {
            method: "DELETE",
        })
        handleDeleteBean(id)
    }

    return(
        <>
            <div className="cards">
                <img className="cardImage" src={image} alt="Error Loading Media" width="250"/>
                <h1>{name}</h1>
                <p>Located at: {shop}</p>
                <p>Address: {address}</p>
                <Link to={`/beans/${id}`}><button>More Info</button></Link>
                <br />
        
                <button className="deleteButtons" onClick={handleDelete}>Remove Bean</button>
            </div>
        </>
    )
}

export default BeanCard