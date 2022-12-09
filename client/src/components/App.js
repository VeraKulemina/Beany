import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar.js";
import SignUp from "./SignUp.js";
import Login from "./Login.js";
import Store from "./Store.js";
import Favorites from "./Favorites.js";
import Beans from "./Beans.js";
import BeansForm from "./BeansForm.js";
import StoreForm from "./StoreForm.js"
import Details from "./Details.js";


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

            <Route exact path="/beans/:id">
              <Details />
            </Route>

            <Route path="/beans">
              <Beans setUser={setUser}/>
            </Route>

            <Route path="/favorites">
              <Favorites setUser={setUser} />
            </Route>

            <Route path="/stores">
              <Store setUser={setUser} />
            </Route>

            <Route path="/addBean">
              <BeansForm setUser={setUser} />
            </Route>

            <Route path="/addStore">
              <StoreForm setUser={setUser} />
            </Route>

            <Route path="/">
              <Login exact setUser={setUser} />
            </Route>

          </Switch>
        ) : (
          <Switch>
            
            <Route path="/signup">
              <SignUp setUser={setUser} />
            </Route>

            <Route path="/">
              <Login setUser={setUser} />
            </Route>
            
          </Switch>
        )}
      </main>
    </>
  );
}


export default App;

