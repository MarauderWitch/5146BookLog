import { db, auth } from "./firebaseConfig.js";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { GoogleGenerativeAI } from '@google/generative-ai';

//Making sure Firebase is initialized
if (typeof firebase === "undefined") {
    console.error("Firebase SDK not loaded correctly.");
} else {
    const provider = new GoogleAuthProvider();
    const signInBttn = document.getElementById('signIn');

    function signIn() {
        signInWithPopup(auth, provider).then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            localStorage.setItem("email", JSON.stringify(user.email));
            window.location = "tasks.html";
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
        });
    }

    //Fix event listener to call signIn() correctly
    if (signInBttn) {
        signInBttn.addEventListener("click", signIn);
    }

    function logout() {
        auth.signOut()
            .then(() => {
                console.log("User signed out.");
                localStorage.removeItem("email"); // Clear stored email
                window.location = "index.html"; // Redirect to sign-in page
            })
            .catch((error) => {
                console.error("Logout error:", error);
            });
    }

    document.addEventListener("DOMContentLoaded", () => {
        const aiInput = document.getElementById("chat-input");
        const aiButton = document.getElementById("send-btn");
        const chatHistory = document.getElementById("chat-history");
        const logoutButton = document.getElementById("logout");
        if (logoutButton) {
                logoutButton.addEventListener("click", logout);
        }

        //If on `dashboard.html`, initialize book logic
        if (document.getElementById("book-form")) {
            const bookForm = document.getElementById("book-form");
            const bookList = document.getElementById("book-list");

            //Add a book to DB
            function addBook(title, author, genre, rating) {
                db.collection("books").add({ title, author, genre, rating })
                    .then(() => {
                        console.log("Book added successfully.");
                        fetchBooks();
                    })
                    .catch((error) => {
                        console.error("Error adding book:", error);
                    });
            }

            //Fetch books from DB
            function fetchBooks() {
                console.log("Fetching books..."); 
                db.collection("books").get().then((querySnapshot) => {
                    
                    if (querySnapshot.empty) {
                        bookList.innerHTML = "<p>No books added yet.</p>";
                        console.log("⚠ No books in database.");
                        return;
                    }
                    querySnapshot.forEach((doc) => {
                        const book = doc.data();
                        const bookId = doc.id;
                        console.log("Found book:", book);
                        displayBook(book, bookId);
                    });
                    console.log("Books successfully fetched.");
                }).catch((error) => {
                    console.error("Error fetching books:", error);
                });
            }

            //Delete a book from DB
            function deleteBook(bookId) {
                db.collection("books").doc(bookId).delete()
                    .then(() => {
                        console.log("Book deleted successfully.");
                        fetchBooks();
                    })
                    .catch((error) => {
                        console.error("Error deleting book:", error);
                    });
            }

            //Display a book in the UI
            function displayBook(book, bookId) {
                const bookItem = document.createElement("li");
                bookItem.innerHTML = `
                    <strong>${book.title}</strong> by ${book.author} <em>(${book.genre})</em> - Rating: ${book.rating}
                    <button onclick="deleteBook('${bookId}')">Delete</button>
                `;
                bookList.appendChild(bookItem);
            }

            if (aiInput && aiButton) {
                aiButton.addEventListener("click", async () => {
                    const userMessage = aiInput.value.trim();
                    if (!userMessage) return;
    
                    appendMessage(`You: ${userMessage}`, "user");
    
                    // First, check if the chatbot has predefined rules
                    if (!ruleChatBot(userMessage)) {
                        // If no predefined rule matches, call the AI chatbot
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

            //Making sure API Key is fetched before using AI
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

            //Form submission
            bookForm.addEventListener("submit", function (e) {
                e.preventDefault();
                const title = document.getElementById("title").value;
                const author = document.getElementById("author").value;
                const genre = document.getElementById("genre").value;
                const rating = document.getElementById("rating").value;
                addBook(title, author, genre, rating);
                bookForm.reset();
            });

            //Fetch books on load & Initialise AI
            fetchBooks();
            initializeAI();
        }
    });
}