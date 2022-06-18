import React from "react";
import LogOut from "./LogOut";
import { BsChatQuote } from "react-icons/bs";
import { auth } from "../firebase";

const NavBar = () => {
  return (
    <>
      <div className="navbar">
        <div style={{ display: "flex" }}>
          <h2>Chat Us</h2>
          <BsChatQuote className="icon" />
        </div>

        <h3 style={{ color: "rgb(56, 56, 75)" }}>
          Say hi, {auth.currentUser.displayName}
        </h3>
        <LogOut />
      </div>
    </>
  );
};

export default NavBar;
