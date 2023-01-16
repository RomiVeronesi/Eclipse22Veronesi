import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBt09MKd7saO_i5kC3gcYr0YpSliEcNSak",
  authDomain: "eclipse-4d7b6.firebaseapp.com",
  projectId: "eclipse-4d7b6",
  storageBucket: "eclipse-4d7b6.appspot.com",
  messagingSenderId: "374553733881",
  appId: "1:374553733881:web:457c93b112f24ee3bf1028",
  measurementId: "G-4P4M036PP1"
};


initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <App />

);

