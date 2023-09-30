// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhWce4aTuNIlV9RDxGr6yL8JQtJoXIVag",
  authDomain: "auth-moha-milon-5d65d.firebaseapp.com",
  projectId: "auth-moha-milon-5d65d",
  storageBucket: "auth-moha-milon-5d65d.appspot.com",
  messagingSenderId: "219444960260",
  appId: "1:219444960260:web:6251523f708fbac3f3a951"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;