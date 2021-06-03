/* eslint-disable no-unused-vars */
import firebase from 'firebase/app';
import "firebase/auth";
import { createContext, useContext, useState, useEffect } from "react";


const firebaseConfig = {
    apiKey:process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId:process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId:process.env.REACT_APP_APP_ID,
  };




// initialize firebase

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

// google provider 

const provider = new firebase.auth.GoogleAuthProvider();

// create auth context
const authContext = createContext();


// auth provider component

export function ProvideAuth({children}) {
    const auth = useProvidedAuth();
    return <authContext.Provider value={auth}>
        { children}
    </authContext.Provider>
}

export const useAuth = () => useContext(authContext);

// provider hook that creates auth objext and
// handles state

function useProvidedAuth() {

    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        photoURL: ''
    });
    const [loginStatus, setLoginStatus] = useState({
      status: "idle",
      error: null
    });

    const formatUser = {
      name: user.displayName,
      email: user.email,
      photoURL: user.photoURL
    }
    const [error, setError] = useState('');

    // signinwithpopup 

    const signInWithPopUp = async () => {
        try {
            const response = await firebase.auth()
            .signInWithPopup(provider);

            // console.log(response);
            const {displayName, photoURL, email} = response.user;
            const signedInUser = {
                isSignedIn: true,
                name: displayName,
                email: email,
                photoURL: photoURL
            };
            setUser(signedInUser);
            setLoginStatus({status: "resolved", error: null});
            return user;
        } catch(err){
            // handle errors here 
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorCode, errorMessage);
        }
    }


    // signout
  const signout = () => {
    return firebase
      .auth()
      .signOut()
      .then(() => {
        setUser(false);
      });
  };

  // get user on mount

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(false);
      }
    });
    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  // return the user object and auth methods
  return {
    user,
    signInWithPopUp,
    signout,
    formatUser
  };

}