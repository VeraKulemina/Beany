import React from "react";
import { Link } from "react-router-dom";
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
            <Link to="/addbean">Add Bean</Link>
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