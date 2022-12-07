import React, {useState, useEffect} from "react";
import StoreCard from "./StoreCard";


function Store(){
    const [stores, setStores] = useState([])

    useEffect(() => {
        fetch('/shops')
            .then((r) => r.json())
            .then(store => setStores(store))
    }, [])

    const storeCard = stores.map((store) => (
        <StoreCard
            key = {store.id}
            id = {store.id}
            name = {store.name}
            img = {store.img}
            address = {store.address}
        />
    ))


    return(
        <>
            <ul>{storeCard}</ul>
        </>    
    )
}

export default Store