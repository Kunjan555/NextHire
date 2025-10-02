// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBoxe4eR_tCVySYkIEharbnbSh8iPwBqgQ",
  authDomain: "nexthire-4aa31.firebaseapp.com",
  projectId: "nexthire-4aa31",
  storageBucket: "nexthire-4aa31.firebasestorage.app",
  messagingSenderId: "70187734153",
  appId: "1:70187734153:web:037da8401faec53fec2258",
  measurementId: "G-J07Y4HJBYP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

// ✅ Export app (and analytics if needed)
export { app, analytics, auth };
