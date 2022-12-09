import React, {useState} from "react";
import { useHistory } from "react-router-dom"


function StoreForm({handleAdd}) {
  const [address, setAddress] = useState("");
  const [name, setName] = useState("");
  const [review, setReview] = useState("");

  const history = useHistory()




  function handleSubmit(e) {
    e.preventDefault();
    const shopData = {
      address: address,
      name: name,
      review: review
    };
    fetch("/shops", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(shopData),
  })
    .then((r) => r.json())
    // .then((newStore) => handleAdd((newStore)));
    .then((newStore) => console.log(((newStore))));
    setAddress("");
    setName("");
    setReview(""); 
    history.push("/stores")
}



  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <br />
        <h1 className="h2">Create a new store!</h1>
        <br />
        <label>Name</label>
        <input
          type="text"
          name="shop"
          placeholder="Dunkin Donuts"
          className="input-text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label>Address</label>
        <input
          type="text"
          name="shop"
          placeholder="18300 W Alameda Pkwy, Morrison, CO 80465"
          className="input-text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <br />
        <label>Rating (1-10)</label>
        <input
          type="integer"
          name="shop"
          placeholder="9"
          className="input-text"
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Submit"
          className="input-text"
        />
      </form>
    </div>
  );
}

export default StoreForm;