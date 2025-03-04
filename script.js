import { db, auth } from "/firebase.js";
import { signInWithPopup, GoogleAuthProvider, } from "firebase/auth";
import log from "loglevel";
import { GoogleGenerativeAI } from '@google/generative-ai';
import { collection, getDocs, getDoc, addDoc, deleteDoc, doc, query, where } from "firebase/firestore";

document.addEventListener("DOMContentLoaded", function() {
    log.setLevel("info");
    log.info("Application started");
    
    console.log("Firebase Firestore:", db, auth);

    //Sign-In
    const provider = new GoogleAuthProvider();
    const signInBttn = document.getElementById("signIn");

    function signIn() {
        signInWithPopup(auth, provider).then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            localStorage.setItem("email", JSON.stringify(user.email));
            window.location = "dashboard.html";
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
        });
    }

    signInBttn.addEventListener("click", function(event) {
        signIn(auth, provider);
    });

    //User Email in localStorage
    const email = localStorage.getItem("email") ? JSON.parse(localStorage.getItem("email")) : null;
    console.log("Email:", email);

    if (!email) {
        console.warn("No email found. Redirecting to login page...");
        setTimeout(() => {
            window.location.href = "index.html";
        }, 1000);
    }

    //Logout
    const signOutBttn = document.getElementById("logout");
    if (signOutBttn) {
        signOutBttn.addEventListener("click", function(event) {
            localStorage.removeItem("email");
            window.location.href = "index.html";
        });
    } else {
        console.error("Logout button not found.");
    }

    //Book List
    console.log("Checking for book-form:", document.getElementById("book-form"));

    if (document.getElementById("book-form")) {
        console.log("Initializing Book Logic...");

        const bookForm = document.getElementById("book-form");
        const bookList = document.getElementById("book-list");

        async function addBook(title, author, genre, rating) {
            try {
                const user = auth.currentUser;
                if (!user) {
                    console.error("No user signed in. Cannot add book.");
                    return;
                }

                await addDoc(collection(db, "books"), {
                    title,
                    author,
                    genre,
                    rating,
                    email: user.email, //stores the book under the user's email
                });

                console.log(`Book "${title}" added successfully by ${user.email}.`);
                displayBooks();
            } catch (error) {
                console.error("Error adding book:", error);
            }
        }

        async function displayBooks() {
            console.log("Fetching books...");

            try {
                // Get only the books that belong to the signed-in user
                const user = auth.currentUser;
                if (!user) {
                    console.log("No user signed in. Cannot fetch books.");
                    return;
                }

                const q = query(collection(db, "books"), where("email", "==", user.email));
                const querySnapshot = await getDocs(q);

                if (querySnapshot.empty) {
                    bookList.innerHTML = "<p>No books added yet.</p>";
                    console.log("No books found in database.");
                    return;
                }

                querySnapshot.forEach((doc) => {
                    const book = doc.data();
                    const bookId = doc.id;

                    // Create the list item
                    const bookItem = document.createElement("li");
                    bookItem.id = bookId; // Assign unique ID
                    bookItem.innerHTML = `
                        <strong>${book.title}</strong> by ${book.author} <em>(${book.genre})</em> - Rating: ${book.rating}
                        <button class="delete-btn" data-id="${bookId}">Delete</button>
                    `;
                    bookList.appendChild(bookItem);
                });

                console.log("Books successfully displayed.");
            } catch (error) {
                console.error("Error fetching and displaying books:", error);
            }
        }

        document.addEventListener("click", async (e) => {
            if (e.target.classList.contains("delete-btn")) {
                const bookId = e.target.getAttribute("data-id");
                try {
                    await deleteDoc(doc(db, "books", bookId));
                    console.log(`Book with ID ${bookId} deleted.`);
                    displayBooks(); //Re-fetch and update UI after deletion
                } catch (error) {
                    console.error("Error deleting book:", error);
                }
            }
        });

        if (document.getElementById("book-form")) {
            console.log("Book form found. Initializing book logic...");

            const bookForm = document.getElementById("book-form");
            const bookList = document.getElementById("book-list");

            bookForm.addEventListener("submit", function (e) {
                console.log("Form submit event detected.");
                e.preventDefault();
                console.log("Book form submitted.");

                const title = document.getElementById("title").value.trim();
                const author = document.getElementById("author").value.trim();
                const genre = document.getElementById("genre").value.trim();
                const rating = document.getElementById("rating").value.trim();

                if (!title || !author || !genre || !rating) {
                    console.error("All fields must be filled.");
                    return;
                }

                console.log("Form values:", { title, author, genre, rating });

                addBook(title, author, genre, rating);
                bookForm.reset();
            });

            displayBooks();
        } else {
            console.error("Book form not found.");
        }
    }

    //Chatbot Logic
    const aiInput = document.getElementById("chat-input");
    const aiButton = document.getElementById("send-btn");
    const chatHistory = document.getElementById("chat-history");

    if (aiInput && aiButton) {
        aiButton.addEventListener("click", async () => {
            const userMessage = aiInput.value.trim();
            if (!userMessage) return;

            appendMessage(`You: ${userMessage}`, "user");

            if (!ruleChatBot(userMessage)) {
                try {
                    const response = await askChatBot(userMessage);
                    appendMessage(`Chatbot: ${response}`, "bot");
                } catch (error) {
                    console.error("Error with AI chatbot:", error);
                    appendMessage("Chatbot: Sorry, I couldn't process that request.", "bot");
                }
            }

            aiInput.value = "";
        });
    }

    async function getApiKey() {
        let snapshot = await getDoc(doc(db, "apikey", "googlegenai"));
        apiKey = snapshot.data().key;
        genAI = new GoogleGenerativeAI(apiKey);
        model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    }

    async function askChatBot(request) {
        const response = await model.generateContent(request);
        return response.candidates[0].content.parts[0].text;
    }

    function appendMessage(message) {
        let history = document.createElement("div");
        history.textContent = message;
        history.className = 'history';
        chatHistory.appendChild(history);
    }

    function ruleChatBot(request) {
        request = request.toLowerCase().trim();
        if (request.startsWith("add")) {
            appendMessage("To add a book, enter title, author, genre, and rating, then click 'Add Book'.");
            return true;
        }
        if (request.startsWith("delete")) {
            appendMessage("To delete a book, click the 'Delete' button next to it.");
            return true;
        }
        appendMessage("I'm sorry, I didn't understand that command.");
        return false;
    }

    async function initializeAI() {
        await getApiKey();
        console.log("AI initialized successfully.");
    }

    initializeAI();
});