// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbRpZo9l8XD-aTculNHOFcbOVH8TE8AJQ",
  authDomain: "mobile2025-31083.firebaseapp.com",
  projectId: "mobile2025-31083",
  storageBucket: "mobile2025-31083.firebasestorage.app",
  messagingSenderId: "892011499190",
  appId: "1:892011499190:web:5fbd57d8f46b0a7b296017"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
