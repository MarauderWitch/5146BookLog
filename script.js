import { GoogleGenerativeAI } from '@google/generative-ai';

// Making sure Firebase is initialized
if (typeof firebase === "undefined") {
    console.error("Firebase SDK not loaded correctly.");
} else {
    const auth = firebase.auth();
    const db = firebase.database();

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

            // Add a book to Firebase
            function addBook(title, author, genre, rating) {
                const bookRef = db.ref("books").push();
                bookRef.set({ title, author, genre, rating })
                    .then(() => {
                        console.log("Book added successfully.");
                        fetchBooks();
                    })
                    .catch((error) => {
                        console.error("Error adding book:", error);
                    });
            }

            // Fetch books from Firebase
            function fetchBooks() {
                db.ref("books").on("value", (snapshot) => {
                    if (!snapshot.exists()) {
                        console.log("No books found in the database.");
                        bookList.innerHTML = "<p>No books added yet.</p>";
                        return;
                    }

                    bookList.innerHTML = ""; // ✅ Clear list before adding new items

                    snapshot.forEach((childSnapshot) => {
                        const book = childSnapshot.val();
                        const bookId = childSnapshot.key;
                        displayBook(book, bookId);
                    });

                    console.log("Books successfully fetched.");
                }, (error) => {
                    console.error("Error fetching books:", error);
                });
            }

            // Display a book in the UI
            function displayBook(book, bookId) {
                const bookItem = document.createElement("li");
                bookItem.innerHTML = `
                    <strong>${book.title}</strong> by ${book.author} <em>(${book.genre})</em> - Rating: ${book.rating}
                    <button onclick="editBook('${bookId}')">Edit</button>
                    <button onclick="deleteBook('${bookId}')">Delete</button>
                `;
                bookList.appendChild(bookItem);
                console.log("Book displayed:", book); // ✅ Debugging output
            }

            // Delete a book
            function deleteBook(bookId) {
                db.ref(`books/${bookId}`).remove()
                    .then(() => {
                        console.log("Book deleted successfully.");
                        fetchBooks(); // ✅ Refresh list after deletion
                    })
                    .catch((error) => {
                        console.error("Error deleting book:", error);
                    });
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
                return response.candidates[0].content.parts[0].text; // ✅ Extracts only the AI's response text
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
                    let bookName = request.replace("add", "").trim();
                    if (bookName) {
                        appendMessage(`To add the book "${bookName}", please enter its title, author, genre, and rating in the provided fields, then click the 'Add Book' button.`);
                    } else {
                        appendMessage("Please specify the book title after 'Add'.");
                    }
                    return true;
                }
                
                if (request.startsWith("delete")) {
                    let bookName = request.replace("delete", "").trim();
                    if (bookName) {
                        appendMessage(`To delete the book "${bookName}", find it in your book list and click the 'Delete' button.`);
                    } else {
                        appendMessage("Please specify the book title after 'Delete'.");
                    }
                    return true;
                }
                
                if (request.startsWith("edit")) {
                    let bookName = request.replace("edit", "").trim();
                    if (bookName) {
                        appendMessage(`To edit the book "${bookName}", find it in your book list and click the 'Edit' button, then update the details as needed.`);
                    } else {
                        appendMessage("Please specify the book title after 'Edit'.");
                    }
                    return true;
                }
                
                appendMessage("I'm sorry, I didn't understand that command. Try using 'Add [book title]', 'Delete [book title]', or 'Edit [book title]'.");
                return false;
            }

            // Form submission
            bookForm.addEventListener("submit", function (e) {
                e.preventDefault();
                const title = document.getElementById("title").value;
                const author = document.getElementById("author").value;
                const genre = document.getElementById("genre").value;
                const rating = document.getElementById("rating").value;

                addBook(title, author, genre, rating);
                bookForm.reset();
            });

            // Fetch books on load
            fetchBooks();
        }
    });
}