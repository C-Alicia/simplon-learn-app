// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCX_Z-LfB1lsuTLFqVMHMM032YInboxHi4",
  authDomain: "simplon-learn-project.firebaseapp.com",
  projectId: "simplon-learn-project",
  storageBucket: "simplon-learn-project.appspot.com",
  messagingSenderId: "9542104701",
  appId: "1:9542104701:web:72bda5a5f0a85d9e34e314"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

const storage = getStorage(app);

export {auth, db, storage}