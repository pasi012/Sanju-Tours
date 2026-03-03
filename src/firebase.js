// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC_kNgDM_TnF1rFqRLemZWEAxAwyCr9exk",
  authDomain: "sanju-tours.firebaseapp.com",
  projectId: "sanju-tours",
  storageBucket: "sanju-tours.firebasestorage.app",
  messagingSenderId: "879759794134",
  appId: "1:879759794134:web:08420aaa41017ead9a4e77",
  measurementId: "G-7JEGGWC4SF"
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const db = getFirestore(app);
