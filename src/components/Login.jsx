import React from "react";
import { AiOutlineGoogle } from "react-icons/ai";
import { RiFacebookFill } from "react-icons/ri";

const Login = () => {
  return (
    <div className="login-page">
      <div className="login-card">
        <h1>Chat App</h1>
        <div className="login-btn-container">
          <div className="login-btn google">
            <AiOutlineGoogle id="google-icon" />
            Login With Google
          </div>
          <div className="btn-separator">
            <div className="line" />
            <p>or</p>
            <div className="line" />
          </div>
          <div className="login-btn facebook">
            <RiFacebookFill id="fb-icon" /> Login With Facebook
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
