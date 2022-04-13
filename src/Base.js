// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage";
import {getFirestore} from "@firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtMRFB8QsJt6qHjbUKcgJ2aIV5y-rB8wc",
  authDomain: "lsetfproject.firebaseapp.com",
  projectId: "lsetfproject",
  storageBucket: "lsetfproject.appspot.com",
  messagingSenderId: "954051423126",
  appId: "1:954051423126:web:5140a8ed98e20f2c6c8bb7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
