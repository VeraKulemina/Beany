import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar.js";
import SignUp from "./SignUp.js";
import Login from "./Login.js";
import Landing from "./Landing.js";
import Store from "./Store.js";
import Addition from "./Addition.js";
import Favorites from "./Favorites.js";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <main>
        {user ? (
          <Switch>
            <Route path="/">
              <Landing user={user}/>
            </Route>
          </Switch>
        ) : (
          <Switch>
            
            <Route path="/signup">
              <SignUp setUser={setUser} />
            </Route>

            <Route path="/favorites">
              <Favorites setUser={setUser} />
            </Route>

            <Route path="/stores">
              <Store setUser={setUser} />
            </Route>

            <Route path="/login">
              <Login setUser={setUser} />
            </Route>

            <Route path="/addition">
              <Addition setUser={setUser} />
            </Route>

            <Route path="/">
              <Landing />
            </Route>
            
          </Switch>
        )}
      </main>
    </>
  );
}


export default App;