// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFzJExLgOxQ3cgj4vX00AJ9UvkFxjP2X0",
  authDomain: "event-manegment-40810.firebaseapp.com",
  projectId: "event-manegment-40810",
  storageBucket: "event-manegment-40810.appspot.com",
  messagingSenderId: "226245994824",
  appId: "1:226245994824:web:7eebb576b54cef581eeb7d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
