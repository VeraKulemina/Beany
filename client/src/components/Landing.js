import React from "react";
import { Link } from "react-router-dom";



// function Landing({ user }) {
//     if (user) {
//       return <h1>Welcome, {user.username}!</h1>;
//     } else {
//       return <h1>Please Login or Sign Up</h1>;
//     }
// }


function Landing() {
  return(
  <>
    <Link to="/signup">Signup</Link>
    <Link to="/login">Login</Link>
  </>
  )
}
export default Landing;