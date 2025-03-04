import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBns3LavTVNJqw29TSokocIu7B2d5TUXWI",
    authDomain: "info5146booklog.firebaseapp.com",
    databaseURL: "https://info5146booklog.firebaseio.com",
    projectId: "info5146booklog",
    storageBucket: "info5146booklog.appspot.com",
    messagingSenderId: "497963989735",
    appId: "1:497963989735:web:8895451e8ffe6c446e0042"
};

//Initialize Firebase globally
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
console.log("Firebase initialized successfully.");

export { db, auth };