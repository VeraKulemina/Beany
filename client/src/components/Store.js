import React, {useState, useEffect} from "react";
import StoreCard from "./StoreCard";


function Store(){
    const [stores, setStores] = useState([])

    useEffect(() => {
        fetch('/shops')
            .then((r) => r.json())
            .then(store => setStores(store))
    }, [])

    function handleDelete(id) {
        const newStoreList = stores.filter((oneShop) => 
        oneShop.id !== id)
        setStores(newStoreList)
      }

    function handleReview(updatedReview) {
        setStores((stores) =>
            stores.map((review) => {
            return review.id === updatedReview.id ? updatedReview : review;
        })
        );
    }


    function handleAdd(newStore) {
        setStores([...stores, newStore]);
      }

    const storeCard = stores.map((store) => (
        <StoreCard
            key = {store.id}
            id = {store.id}
            name = {store.name}
            review = {store.review}
            address = {store.address}
            handleAdd={handleAdd}
            handleDelete={handleDelete}
            handleReview={handleReview}
        />
    ))


    return(
        <>
            {storeCard}
        </>    
    )
}

export default Store