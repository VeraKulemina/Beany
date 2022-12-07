import React, {useState} from "react";

function BeansForm({onAddBeans}) {
  const [origin, setOrigin] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState([]);
  const [roast, setRoast] = useState("");
  const [description, setDescription] = useState("");
  const [shopName, setShopName] = useState("");




  function handleSubmit(e) {
    e.preventDefault();
    const beanData = {
      origin: origin,
      name: name,
      image: image,
      roast: roast,
      description: description
   
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
    setImage("");
    setOrigin("");
    setName("");
    setRoast("");
    setDescription("");
    setShopName("");

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
          name="shop"
          placeholder="Enter a shop here ..."
          className="input-text"
          value={shopName}
          onChange={(e) => setShopName(e.target.value)}
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