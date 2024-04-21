// Login.js

import React from "react";

const Login = ({ login }) => {
  const handleLogin = () => {
    login();
  };

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
