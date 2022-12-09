import React, { useState, } from "react";
import { useHistory } from "react-router-dom"
import { Link } from "react-router-dom";


function Login({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory()

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password}),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => 
        setUser(user));
        history.push("/beans")
        
        
      }
    });
  }



  return (
    <>
    
      <div className="buttonContainer2">
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            autoComplete="off"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      <h1 className="or">OR</h1>
      <div className="buttonContainer">
        <Link to="/signup"><button className="buttonSign">Create an Account</button></Link>
      </div>
    </>

  );
}

export default Login;