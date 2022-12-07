import React from "react";
import { Link } from "react-router-dom";

function Landing() {
  return(
  <>
    <Link to="/signup">Signup</Link>
    <Link to="/login">Login</Link>
  </>
  )
}
export default Landing;