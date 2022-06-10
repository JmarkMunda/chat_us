import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const LogOut = () => {
  return (
    <div>
      <button className="btn" onClick={() => signOut(auth)}>
        Log out
      </button>
    </div>
  );
};

export default LogOut;
