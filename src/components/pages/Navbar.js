import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../auth/Auth";

export default function Navbar() {
  
  const auth = useAuth();
  const history = useHistory();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Shop Keeper
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            {auth.user.displayName ? (
              <>
              <li className="nav-item">
                <Link  className="nav-link"  to="/products">Products</Link> 
              </li>
              <li className="nav-item">
              <Link  className="nav-link"  to="/profile">{auth.user.displayName}</Link> 
              </li>
              <li className="nav-item">
              <button
                  type="button"
                  className="btn btn-danger btn-sm logoutBtn"
                  onClick={() => auth.signout(() => history.push("/"))}
                >
                  Log Out
                </button>
              </li>
              
              </>
            ) : (
             

              <li className="nav-item">
                <Link className="nav-link" to="/login">Login </Link>
              </li>
              
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
