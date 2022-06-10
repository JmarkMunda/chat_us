// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3O_7DCeaqzhGSQ9lzPqF8DJSl3Bj6ryM",
  authDomain: "chat-us-app.firebaseapp.com",
  projectId: "chat-us-app",
  storageBucket: "chat-us-app.appspot.com",
  messagingSenderId: "249198434388",
  appId: "1:249198434388:web:762c74209ed0be6ed175c1"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth();

export { db, auth };
