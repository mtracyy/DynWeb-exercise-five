import React, {useEffect, useState} from 'react';
import { Route, BrowserRouter as Router, Redirect } from "react-router-dom";
import * as firebase from "firebase/app";
import "firebase/auth";

//pages
import CreateAccount from "./pages/CreateAccount";
import Login from "./pages/Login";
import UserProfile from "./pages/UserProfile";
import './App.css';

function App() {
    const [loggedIn, setLoggedIn] = useState(false);
    const firebaseConfig = {
        apiKey: "AIzaSyDsSfPFOpEWawMyX9SMm8kSQgsAkPJ8DBw",
        authDomain: "dynweb-exercise-five.firebaseapp.com",
        databaseURL: "https://dynweb-exercise-five.firebaseio.com",
        projectId: "dynweb-exercise-five",
        storageBucket: "dynweb-exercise-five.appspot.com",
        messagingSenderId: "18363737482",
        appId: "1:18363737482:web:c9caea466e2369f1331473"
    };

    //Ensure app is initialized when it is ready to be
    useEffect(() => {
        //ensure app is not init more than once
        //is firebase already initialized?
        if (!firebase.apps.length) {
            //initialize firebase
            firebase.initializeApp(firebaseConfig);
        }

        //setting auth to be persistent in SESSION storage
        firebase
            .auth()
            .setPersistence(firebase.auth.Auth.Persistence.SESSION)
            .catch(function (e) {
                console.log('INSTANTIATING AUTH ERROR', e);
            });
    }, [firebaseConfig]);

    //login
    function LoginFunction(e) {
        e.preventDefault();
        let email = e.currentTarget.loginEmail.value;
        let password = e.currentTarget.loginPassword.value;

        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(function (response) {
                console.log("LOGIN RESPONSE", response);
                setLoggedIn(true);
            })
            .catch(function (error) {
                console.log("LOGIN ERROR", error)
            });
    }

    function LogoutFunction() {
        firebase
            .auth()
            .signOut()
            .then(function () {
                setLoggedIn(false);
            })
            .catch(function (error) {
                console.log("LOGOUT ERROR", error);
            });
    }

    //create Account
    function CreateAccountFunction(e) {
        e.preventDefault();
        console.log("form payload", e);
        let email = e.currentTarget.createEmail.value;
        let password = e.currentTarget.createPassword.value;

        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(function (response) {
                console.log("VALID ACCOUNT CREATE", response);
                setLoggedIn(true);
            })
            .catch(function(e) {
                console.log("CREATE ACCOUNT ERROR", e);
            });
    }

    return (
        <div className="App">
          <Router>
              <Route exact path="/">
                <UserProfile/>
              </Route>
              <Route exact path="/login">
                <Login LoginFunction={LoginFunction}/>
              </Route>
              <Route exact path="/create-account">
                <CreateAccount CreateAccountFunction={CreateAccountFunction}/>
              </Route>
          </Router>
        </div>
    );
}

export default App;
