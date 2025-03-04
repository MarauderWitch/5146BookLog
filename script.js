import { db, auth } from "/firebase.js";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { GoogleGenerativeAI } from '@google/generative-ai';
import { collection, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore";

//Ensure the script runs only after the DOM is fully loaded
//document.addEventListener("DOMContentLoaded", () => {
    //console.log("DOM fully loaded. Initializing app...");

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

    //Logout
    const logoutButton = document.getElementById("logout");
    if (logoutButton) {
        logoutButton.addEventListener("click", () => {
            auth.signOut().then(() => {
                console.log("User signed out.");
                localStorage.removeItem("email");
                window.location.href = "index.html";
            }).catch((error) => {
                console.error("Logout error:", error);
            });
        });
    }

    //Book List
    if (document.getElementById("book-form")) {
        console.log("Initializing Book Logic...");

        const bookForm = document.getElementById("book-form");
        const bookList = document.getElementById("book-list");

        async function addBook(title, author, genre, rating) {
            try {
                await addDoc(collection(db, "books"), { title, author, genre, rating });
                console.log("Book added successfully.");
                fetchBooks();
            } catch (error) {
                console.error("Error adding book:", error);
            }
        }

        async function fetchBooks() {
            try {
                console.log("Fetching books...");
                const querySnapshot = await getDocs(collection(db, "books"));

                if (querySnapshot.empty) {
                    bookList.innerHTML = "<p>No books added yet.</p>";
                    console.log("⚠ No books in database.");
                    return;
                }

                //bookList.innerHTML = "";
                querySnapshot.forEach((doc) => {
                    const book = doc.data();
                    const bookId = doc.id;
                    console.log("Found book:", book);
                    displayBook(book, bookId);
                });

                console.log("Books successfully fetched.");
            } catch (error) {
                console.error("Error fetching books:", error);
            }
        }

        async function deleteBook(bookId) {
            try {
                await deleteDoc(doc(db, "books", bookId));
                console.log("Book deleted successfully.");
                fetchBooks();
            } catch (error) {
                console.error("Error deleting book:", error);
            }
        }

        function displayBook(book, bookId) {
            const bookItem = document.createElement("li");
            bookItem.innerHTML = `
                <strong>${book.title}</strong> by ${book.author} <em>(${book.genre})</em> - Rating: ${book.rating}
                <button onclick="deleteBook('${bookId}')">Delete</button>
            `;
            bookList.appendChild(bookItem);
        }

        bookForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const title = document.getElementById("title").value;
            const author = document.getElementById("author").value;
            const genre = document.getElementById("genre").value;
            const rating = document.getElementById("rating").value;
            addBook(title, author, genre, rating);
            bookForm.reset();
        });

        fetchBooks();
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
//});