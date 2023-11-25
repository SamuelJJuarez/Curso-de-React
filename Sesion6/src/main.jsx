import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwLHqcwGCY_R90z6wckZjoTb5rQfZLOdE",
  authDomain: "fakestore-samuel.firebaseapp.com",
  projectId: "fakestore-samuel",
  storageBucket: "fakestore-samuel.appspot.com",
  messagingSenderId: "627322462298",
  appId: "1:627322462298:web:0d5bf401c1af8a15107863",
  measurementId: "G-KCC0DG9G7J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
