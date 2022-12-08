import React from "react";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom"


function NavBar({ user, setUser }) {

  const history = useHistory()

  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
        history.push("/")
      }
    });
  }

  return (
    <header style={{ width: '100%' }}>
    
      <div className="container">
        {user ? (
          <> 
            <h1>Welcome, {user.username}!</h1>
            <NavLink className="link" style={{ flex: 1 }} to="/favorites">My Favorites</NavLink>
            <NavLink className="link" style={{ flex: 1 }} to="/stores">Stores</NavLink>
            <NavLink className="link" style={{ flex: 1 }} to="/beans">Beans</NavLink>
            <NavLink className="link" style={{ flex: 1 }} to="/addBean">Add Bean</NavLink>
            <NavLink className="link" style={{ flex: 1 }} to="/addStore">Add Store</NavLink>
            <button onClick={handleLogoutClick}>Logout</button>
          </>
        ) : (
          <>
            <h1>Welcome to Vera, Chuck, & Andy's Site</h1>
          </>
        )}
      </div>
    </header>
  );
}

export default NavBar;