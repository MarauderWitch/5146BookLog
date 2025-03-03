import { GoogleGenerativeAI } from '@google/generative-ai';

// Making sure Firebase is initialized
if (typeof firebase === "undefined") {
    console.error("Firebase SDK not loaded correctly.");
} else {
    const auth = firebase.auth();
    const db = firebase.firestore(); // ✅ Switched to Firestore

    // ✅ Declare sign-in function globally before DOM loads
    window.signInWithGoogle = function () {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider)
            .then((result) => {
                console.log("User signed in:", result.user);
                window.location.href = "dashboard.html";
            })
            .catch((error) => {
                console.error("Error during sign-in:", error.message);
            });
    };

    document.addEventListener("DOMContentLoaded", () => {
        const aiInput = document.getElementById("chat-input");
        const aiButton = document.getElementById("send-btn");
        const chatHistory = document.getElementById("chat-history");

        // ✅ If on `dashboard.html`, initialize book-related logic
        if (document.getElementById("book-form")) {
            const bookForm = document.getElementById("book-form");
            const bookList = document.getElementById("book-list");

            // ✅ Add a book to Firestore
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

            // ✅ Fetch books from Firestore
            function fetchBooks() {
                db.collection("books").get().then((querySnapshot) => {
                    bookList.innerHTML = "";
                    if (querySnapshot.empty) {
                        bookList.innerHTML = "<p>No books added yet.</p>";
                        return;
                    }
                    querySnapshot.forEach((doc) => {
                        const book = doc.data();
                        const bookId = doc.id;
                        displayBook(book, bookId);
                    });
                    console.log("Books successfully fetched.");
                }).catch((error) => {
                    console.error("Error fetching books:", error);
                });
            }

            // ✅ Delete a book from Firestore
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

            // ✅ Display a book in the UI
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
    
                    aiInput.value = ""; // Clear input field after submission
                });
            }

            // ✅ Ensure API Key is fetched before using Generative AI
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

            // ✅ Form submission
            bookForm.addEventListener("submit", function (e) {
                e.preventDefault();
                const title = document.getElementById("title").value;
                const author = document.getElementById("author").value;
                const genre = document.getElementById("genre").value;
                const rating = document.getElementById("rating").value;
                addBook(title, author, genre, rating);
                bookForm.reset();
            });

            // ✅ Fetch books on load
            fetchBooks();
        }
    });
}