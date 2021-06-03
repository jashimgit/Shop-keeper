/* eslint-disable no-unused-vars */
import React, {useState} from "react";
import { useAuth } from "./Auth";
import {useHistory, useLocation} from 'react-router-dom';

export default function Login() {

  const [loggedInUser, setLoggedInUser] = useState(false);
  const auth = useAuth();
  const history = useHistory();
  const location = useLocation();
  const {from} = location.state || {from: { pathname: '/products' }};
  
  const handleGoogleSignIn = () => {
    auth.signInWithPopUp()
    .then(res => {
      handleResponse(res, true);
    })
  }

const handleResponse = ( res, redirect) => {
  setLoggedInUser(res);
  if(redirect) {
    history.replace(from);
  }
}


  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="d-flex login">
            <h2 className="display-4 mb-5">Login </h2>
            <button 
              className="btn btn-danger" 
              type="button"
              onClick={handleGoogleSignIn}
              >
              Sign in with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
