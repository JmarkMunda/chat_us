import React, { useEffect, useState, useRef } from "react";
import { auth, db } from "../firebase";
import {
  collection,
  limit,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import SendMessage from "./SendMessage";
import NavBar from "./NavBar";

const Chat = () => {
  const scroll = useRef();
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

  return (
    <div>
      {/* ========== Navbar =========== */}
      <NavBar />
      {/* ====== Message Box ======= */}
      <div className="messages-container">
        {messages.map(({ id, text, photoURL, uid }) => (
          <div key={id}>
            <div
              className={`message-box ${
                uid === auth.currentUser.uid ? "sent" : "received"
              } `}>
              <img src={photoURL} alt="" />
              <p>{text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ===== Send Message ======= */}
      <SendMessage scroll={scroll} />

      <div ref={scroll}></div>
    </div>
  );
};

export default Chat;
