import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useState } from "react";
import { auth, db } from "../firebase";

const SendMessage = () => {
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
  };
  return (
    <div>
      <form onSubmit={sendMessage}>
        <input
          placeholder="Type a message..."
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
        />
        <button type="submit">Send message</button>
      </form>
    </div>
  );
};

export default SendMessage;
