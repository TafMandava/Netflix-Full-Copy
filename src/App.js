import React from 'react';
/*
    Implement a basic React Router 
*/
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

/*
    Do a named space import
    Import * as ROUTES from ./constants/routes
    This is going to be temporary because we are going to be using an auth listener for authentication but we are also going to be checking if the user is logged in with the auth listener if they are on a certain page which is browse or they attemp to directly access browse without any authentication 
    Right now we are not going to be focusing on setting up some routes so that we can build the other pages
*/
import * as ROUTES from './constants/routes';
import { Home, Browse, Signin, Signup } from './pages';

export default function App() {
  return (
        <Router>
          {/*

              if this refreshes, it will go to that particular path
              <Route exact path="/"> Home
              <Route exact path="/signin"> SIGN_IN
              exact because if you had typed in /user which is /signin without exact it is going to misinterpret it where your application is essentially trying to send you

          */}          
          <Route exact path={ROUTES.HOME}>
            <Home />
          </Route>
          <Route exact path={ROUTES.BROWSE}>
            <Browse />
          </Route>
          <Route exact path={ROUTES.SIGN_IN}>
            <Signin />
          </Route>
          <Route exact path={ROUTES.SIGN_UP}>
            <Signup />
          </Route>                     
        </Router>
  );
}