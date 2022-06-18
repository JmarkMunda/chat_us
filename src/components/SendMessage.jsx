import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useState } from "react";
import { auth, db } from "../firebase";

const SendMessage = ({ scroll }) => {
  const [inputMessage, setInputMessage] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;

    const col = collection(db, "messages");
    await addDoc(col, {
      text: inputMessage,
      uid,
      photoURL,
      createdAt: serverTimestamp(),
    });
    setInputMessage("");
    scroll.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <form onSubmit={sendMessage}>
        <div className="send-message">
          <input
            placeholder="Type a message..."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
          />
          <button className="send-msg-btn" type="submit">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default SendMessage;
