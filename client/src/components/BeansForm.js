import React, { useState} from "react";
import { useHistory } from "react-router-dom"


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
    // .then((newBean) => onAddBeans(newBean));
    .then((newBean) => console.log(((newBean))));

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
        <label>Name</label>
        <input
          type="text"
          name="name"
          placeholder="Colombia Supremo "
          className="input-text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label>Country of Origin</label>
        <input
          type="text"
          name="origin"
          placeholder="Madagascar"
          className="input-text"
          value={origin}
          onChange={(e) => setOrigin(e.target.value)}
        />
        <br />
        <label>Image (URL)</label>
        <input
          type="text"
          name="image"
          placeholder="https://www.foodandwine.com22746e82c.jpg"
          className="input-text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <br />
        <label>Shop ID: (1-8)</label>
        <input
            type="text"
            name="typeTwo"
            placeholder="5"
            value={shop_id}
            onChange={(e) => setShopId(e.target.value)}
          />
          <br />
        <label>Roast</label>
        <input
            type="text"
            name="typeTwo"
            placeholder="Light"
            value={roast}
            onChange={(e) => setRoast(e.target.value)}
          />
          <br />
        <label>Description</label>
        <input
            type="text"
            name="typeTwo"
            placeholder="This coffee delights the senses with the taste of ripe... "
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        <br />
        <input
          type="submit"
          name="submit"
          value="Submit"
          className="button"
        />
      </form>
    </div>
  );
}

export default BeansForm;