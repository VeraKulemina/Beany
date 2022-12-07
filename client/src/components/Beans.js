import React, {useState, useEffect} from "react";
import BeansCard from "./BeansCard"

function Beans(){

    const [beans, setBeans] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/beans')
            .then((r) => r.json())
            .then(beans => setBeans(beans))
    }, [])

    const beanCard = beans.map((bean) => (
        <BeansCard
            id = {bean.id}
            origin = {bean.origin}
            name = {bean.name}
            description = {bean.description}
            image = {bean.image}
            roast ={bean.roast}
        />
    ))


    return(
        <div>
            {beanCard}
        </div>    
    )
}

export default Beans