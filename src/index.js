import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZ1cKlHU3gI0M-WdDJ53x-fVbTXAJBOrA",
  authDomain: "cart-cf41c.firebaseapp.com",
  projectId: "cart-cf41c",
  storageBucket: "cart-cf41c.appspot.com",
  messagingSenderId: "892884908272",
  appId: "1:892884908272:web:0dc26ef3358738c126aa35"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
