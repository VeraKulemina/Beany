import React, { useState} from "react";
import { useHistory } from "react-router-dom"

//useParams


function BeansForm({onAddBeans}) {
  const [origin, setOrigin] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState([]);
  const [roast, setRoast] = useState("");
  const [description, setDescription] = useState("");
  const [shop_id, setShopId] = useState("");

  const history = useHistory()


  // const [beans, setBeans] = useState([]);

//   useEffect(() => {
//     fetch('/beans')
//         .then((r) => r.json())
//         .then(beans => setBeans(beans))
// }, [])

  function handleSubmit(e) {
    e.preventDefault();
    const beanData = {
      origin: origin,
      name: name,
      image: image,
      roast: roast,
      description: description,
      shop_id: parseInt(shop_id),
    };
    fetch("/beans", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(beanData),
  })
    .then((r) => r.json())
    .then((newBean) => onAddBeans(newBean));
    setOrigin("");
    setName("");
    setRoast("");
    setDescription("")
    setImage("")    
    setShopId("")
    history.push("/beans")
  
}

    

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <br />
        <h1 className="h2">Create Bean!</h1>
        <input
          type="text"
          name="name"
          placeholder="Enter a bean's name..."
          className="input-text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        
        <input
          type="text"
          name="origin"
          placeholder="Enter a origin here ..."
          className="input-text"
          value={origin}
          onChange={(e) => setOrigin(e.target.value)}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a Bean's image URL..."
          className="input-text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <br />
        <input
            type="text"
            name="typeTwo"
            placeholder="shop_id"
            value={shop_id}
            onChange={(e) => setShopId(e.target.value)}
          />
          <br />
        <input
            type="text"
            name="typeTwo"
            placeholder="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        <br />
        <input
            type="text"
            name="typeTwo"
            placeholder="roast"
            value={roast}
            onChange={(e) => setRoast(e.target.value)}
          />
          <br />
        <input
          type="submit"
          name="submit"
          value="Create New Art Object"
          className="input-text"
        />
      </form>
    </div>
  );
}

export default BeansForm;