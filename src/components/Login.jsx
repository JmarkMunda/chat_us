import React from "react";
import { AiOutlineGoogle } from "react-icons/ai";
import { RiFacebookFill } from "react-icons/ri";

// asset
import chatImg from "../assets/quick_chat.svg";

// Firebase
import {
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
} from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  const signInWithFacebook = () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;

        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;

        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = FacebookAuthProvider.credentialFromError(error);
        console.log(error);
        alert(`Error: ${errorMessage}`);
        // ...
      });
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h1 style={{ color: "rgb(56, 56, 75)" }}>Chat Us</h1>
        <div className="login-btn-container">
          <div className="login-btn google" onClick={() => signInWithGoogle()}>
            <AiOutlineGoogle id="google-icon" />
            Login With Google
          </div>
          <div className="btn-separator">
            <div className="line" />
            <p>or</p>
            <div className="line" />
          </div>
          <div
            className="login-btn facebook"
            onClick={() => signInWithFacebook()}>
            <RiFacebookFill id="fb-icon" /> Login With Facebook
          </div>
        </div>
      </div>

      {/* Login SVG */}
      <img src={chatImg} alt="" />
    </div>
  );
};

export default Login;
