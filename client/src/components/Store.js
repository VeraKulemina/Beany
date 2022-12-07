import React, {useState, useEffect} from "react";
import StoreCard from "./StoreCard";


function Store(){
    const [stores, setStores] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/shops')
            .then((r) => r.json())
            .then(store => setStores(store))
    }, [])

    const storeCard = stores.map((store) => (
        <StoreCard
            id = {store.id}
            name = {store.name}
            img = {store.image}
            address = {store.address}
        />
    ))


    return(
        <div>
            {storeCard}
        </div>    
    )
}

export default Store