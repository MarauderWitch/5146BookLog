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

// Initialize Firebase
let app, db, auth;

try {
    app = initializeApp(firebaseConfig);
    db = getFirestore(app);
    auth = getAuth(app);

    if (app && db && auth) {
        console.log("Firebase initialized successfully.");
    } else {
        console.error("Firebase components failed to initialize.");
    }
} catch (error) {
    console.error("Firebase initialization error:", error);
}

export { db, auth };