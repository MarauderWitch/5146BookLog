//import { initializeApp } from "firebase/app";
//import { doc, getDocs, addDoc, updateDoc, getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBns3LavTVNJqw29TSokocIu7B2d5TUXWI",
    authDomain: "info5146booklog.firebaseapp.com",
    projectId: "info5146booklog",
    storageBucket: "info5146booklog.firebasestorage.app",
    messagingSenderId: "497963989735",
    appId: "1:497963989735:web:8895451e8ffe6c446e0042"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);