// Ensure Firebase is loaded before initializing
if (typeof firebase === "undefined") {
    console.error("Firebase SDK not loaded correctly.");
} else {
    // Firebase configuration
    const firebaseConfig = {
        apiKey: "AIzaSyBns3LavTVNJqw29TSokocIu7B2d5TUXWI",
        authDomain: "info5146booklog.firebaseapp.com",
        databaseURL: "https://info5146booklog-default-rtdb.firebaseio.com",
        projectId: "info5146booklog",
        storageBucket: "info5146booklog.appspot.com",
        messagingSenderId: "497963989735",
        appId: "1:497963989735:web:8895451e8ffe6c446e0042"
    };

    // ✅ Initialize Firebase globally
    firebase.initializeApp(firebaseConfig);
    console.log("Firebase initialized successfully.");
}