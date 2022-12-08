import React from "react";
import { Link } from "react-router-dom";

function Landing() {
  return(
  <>
      <Link className="landing" to="/signup">
        <button type="button">
          Signup
        </button>
    </Link>
    <Link className="landing" to="/login">
        <button type="button">
          Login
        </button>
    </Link>
    
    {/* <Link to="/signup"className="landing">Signup</Link> */}
    {/* <Link to="/login" className="landing">Login</Link> */}
  </>
  )
}
export default Landing;