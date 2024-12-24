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
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Your Brand
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {isAuthenticated && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/profile">
                    Profile
                  </Link>
                </li>
              </>
            )}
          </ul>
          <div className="d-flex">
            {/* {!isAuthenticated && (
              <button
                className="btn btn-outline-light"
                onClick={() => loginWithRedirect({})}
              >
                Log in
              </button>
            )} */}
            {isAuthenticated && (
              <button
                className="btn btn-outline-light"
                onClick={() => logout()}
              >
                Log out
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
