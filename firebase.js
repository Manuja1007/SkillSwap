// firebase.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyANAA7mQHYuUxGfyvqFNdBt-41sCLBsMGU",
  authDomain: "skill-swap-9fbb6.firebaseapp.com",
  projectId: "skill-swap-9fbb6",
  storageBucket: "skill-swap-9fbb6.firebasestorage.app",
  messagingSenderId: "295137512639",
  appId: "1:295137512639:web:5cc87ff4143b0201644a0a"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
