import React from "react";


function StoreCard({id, name, review, address, handleDelete}){


    function handleDeleteShop(){
        fetch(`shops/${id}`, {
            method: "DELETE",
        })
        handleDelete(id)
    }

    return(
        <>
            <div className="cards">
                <p>{name}</p>
                <p>{address}</p>
                <p>{review}</p>
                <button className="deleteButtons" onClick={handleDeleteShop}>Remove Show</button>
            </div>
        </> 
    )
}

export default StoreCard