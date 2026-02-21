// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC9uHQ6AnndY7_6B3UTTAtF_7lNqsP097o",
  authDomain: "nature-srilanka-tours.firebaseapp.com",
  projectId: "nature-srilanka-tours",
  storageBucket: "nature-srilanka-tours.firebasestorage.app",
  messagingSenderId: "149070979192",
  appId: "1:149070979192:web:cf45198b0133d673288d8d",
  measurementId: "G-KH7365727B"
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const db = getFirestore(app);
