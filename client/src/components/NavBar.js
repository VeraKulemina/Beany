import React from "react";
import { Link } from "react-router-dom";

function NavBar({ user, setUser }) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <header>
      {/* <div>
        <Link to="/">Landing</Link>
      </div> */}
      <div>
        {user ? (
          <> 
            <h1>Welcome, {user.username}!</h1>
            <Link to="/favorites">My Favorites</Link>
            <Link to="/stores">Stores</Link>
            <Link to="/beans">Beans</Link>
            <Link to="/addition">Add</Link>
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