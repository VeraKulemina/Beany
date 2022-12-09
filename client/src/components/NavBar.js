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
    
      <div >
        {user ? (
          <> 
            <div className="container">
              <h1 className="siteTitle">Welcome, {user.username}!</h1>
              <NavLink className="link" style={{ flex: 1 }} to="/favorites">My Favorites</NavLink>
              <NavLink className="link" style={{ flex: 1 }} to="/stores">Stores</NavLink>
              <NavLink className="link" style={{ flex: 1 }} to="/addStore">Add Store</NavLink>
              <NavLink className="link" style={{ flex: 1 }} to="/beans">Beans</NavLink>
              <NavLink className="link" style={{ flex: 1 }} to="/addBean">Add Bean</NavLink>
              <button onClick={handleLogoutClick}>Logout</button> 
            </div>
          </>
        ) : (
          <>
            <h1 className="siteTitle">Find My Bean</h1>
          </>
        )}
      </div>
    </header>
  );
}

export default NavBar;




