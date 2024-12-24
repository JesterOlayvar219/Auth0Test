import { Link } from "react-router-dom";
import { useAuth0 } from "../../react-auth0-spa";
import React, { useEffect } from "react";

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  useEffect(() => {
    if (!isAuthenticated) {
      loginWithRedirect({});
    }
  }, [isAuthenticated]);

  return (
    <div>
      {!isAuthenticated && (
        <button onClick={() => loginWithRedirect({})}>Log in</button>
      )}

      {isAuthenticated && <button onClick={() => logout()}>Log out</button>}
      {isAuthenticated && (
        <div className="nav-bar">
          <Link to="/">Home</Link>&nbsp;
          <Link to="/profile">Profile</Link>
        </div>

        // <span>
        //   <Link to="/">Home</Link>&nbsp;
        //   <Link to="/profile">Profile</Link>
        // </span>
      )}
    </div>
  );
};

export default NavBar;
