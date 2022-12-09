import React, { useState } from "react";


function StoreCard({id, name, review, address, handleDelete, handleReview}){

    const [reviews, setReview] = useState("")

    function handleDeleteShop(){
        fetch(`shops/${id}`, {
            method: "DELETE",
        })
        handleDelete(id)
    }

    const handleUpdateReview = () => {
        fetch(`shops/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
        },
        body: JSON.stringify({
            review: reviews
        })
      })
        .then((r) => r.json())
        .then((newReview) => {
            handleReview(newReview)
        })
        setReview("");
    }


    return(
        <>
            <div className="storeCards">
                <h2>{name}</h2>
                <p>Address: {address}</p>
                <p>Rating: {review}/10</p>
                {/* <p>{beans.name}</p> */}
                <input type="integer" onChange = {(e)=>{setReview(e.target.value)}}value={reviews} />
                <button onClick={handleUpdateReview}>New Rating</button>
                <button className="storeDeleteButton" onClick={handleDeleteShop}>Remove Shop</button>
            </div>
           
        </> 
    )
}

export default StoreCard