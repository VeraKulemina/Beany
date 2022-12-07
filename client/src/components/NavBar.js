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
    <header>
    
      <div>
        {user ? (
          <> 
            <h1>Welcome, {user.username}!</h1>
            <NavLink to="/favorites">My Favorites</NavLink>
            <NavLink to="/stores">Stores</NavLink>
            <NavLink to="/beans">Beans</NavLink>
            <NavLink to="/addBean">Add Bean</NavLink>
            <NavLink to="/addStore">Add Store</NavLink>
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