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
            <div className="cards">
                <p>{name}</p>
                <p>{address}</p>
                <p>{review}</p>
                <input type="integer" onChange = {(e)=>{setReview(e.target.value)}}value={reviews} />
                <button onClick={handleUpdateReview}>Update Rating</button>
                <button className="deleteButtons" onClick={handleDeleteShop}>Remove Shop</button>
            </div>
           
        </> 
    )
}

export default StoreCard