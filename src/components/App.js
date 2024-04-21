// App.js

import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Link,
} from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Login from "./Login";
import CodePlayground from "./CodePlayground";

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);

  const login = () => {
    setAuthenticated(true);
  };

  const logout = () => {
    setAuthenticated(false);
  };

  return (
    <Router>
      <div className="main-container">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/codeplayground">Code Playground</Link>
            </li>
          </ul>
          <p>User is {authenticated ? "authenticated" : "not authenticated"}</p>
          <button onClick={logout}>Logout</button>
        </nav>
        <Route path="/login" render={() => <Login login={login} />} />
        <PrivateRoute
          path="/codeplayground"
          component={CodePlayground}
          authenticated={authenticated}
        />
      </div>
    </Router>
  );
};

export default App;
