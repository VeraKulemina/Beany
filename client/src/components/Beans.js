import React, {useState, useEffect} from "react";
import BeansCard from "./BeansCard"

function Beans(){

    const [beans, setBeans] = useState([])

    useEffect(() => {
        fetch('/beans')
            .then((r) => r.json())
            .then(beans => setBeans(beans))
    }, [])

    function handleAdd(newBean) {
        setBeans([...beans, newBean]);
      }

    const beanCard = beans.map((bean) => (
        <BeansCard
            key={bean.id}
            id = {bean.id}
            origin = {bean.origin}
            name = {bean.name}
            description = {bean.description}
            image = {bean.image}
            roast ={bean.roast}
            onAddBeans={handleAdd}
        />
    ))


    return(
        <>
            <ul>{beanCard}</ul>
        </>    
    )
}

export default Beans