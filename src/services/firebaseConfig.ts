// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8PuAxL0pCIC8FSbdi-L1V4cXqSHoym7g",
  authDomain: "simplon-learn-b978a.firebaseapp.com",
  projectId: "simplon-learn-b978a",
  storageBucket: "simplon-learn-b978a.appspot.com",
  messagingSenderId: "366490921813",
  appId: "1:366490921813:web:51aa7c71e0f4eb239adddc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

const storage = getStorage(app);

export {auth, db, storage}