import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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
  appId: "1:627322462298:web:51a38c3d8cf6166d107863",
  measurementId: "G-M5NPCG44F4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
