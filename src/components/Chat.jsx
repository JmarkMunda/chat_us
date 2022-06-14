import React, { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import {
  collection,
  getDocs,
  limit,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import LogOut from "./LogOut";
import SendMessage from "./SendMessage";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    const fetchMessages = () => {
      // Collection reference ============
      const docRef = collection(db, "messages");
      // Order and Limit =================
      const q = query(docRef, orderBy("createdAt"), limit(50));

      // Realtime ===================
      onSnapshot(q, (snapshot) => {
        const data = [];
        snapshot.forEach((doc) => {
          data.push({ id: doc.id, ...doc.data() });
        });
        setMessages(data);
      });
    };
    fetchMessages();
  }, []);

  console.log(messages);
  return (
    <div>
      <h2>Chat Room</h2>
      <LogOut />
      <div className="messages-container">
        {messages.map(({ id, text, photoURL, uid }) => (
          <div
            key={id}
            className={`message-box ${
              id === auth.currentUser.uid ? "sent" : "received"
            }`}>
            <img src={photoURL} alt="" />
            <p>{text}</p>
          </div>
        ))}
      </div>

      <SendMessage />
    </div>
  );
};

export default Chat;
