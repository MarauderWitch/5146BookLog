import { db, auth } from "/firebase.js";
import { signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import log from "loglevel";
import { GoogleGenerativeAI } from '@google/generative-ai';
import { collection, getDocs, getDoc, addDoc, deleteDoc, updateDoc, doc, query, where } from "firebase/firestore";

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

    if (signInBttn) {
        signInBttn.addEventListener("click", function(event) {
            signIn(auth, provider);
        });
    } else {
        console.error("Sign-in button not found.");
    }

    //User Email in localStorage
    const email = localStorage.getItem("email") ? JSON.parse(localStorage.getItem("email")) : null;
    console.log("Email:", email);

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
            auth.onAuthStateChanged(async (user) => {
                if (!user) {
                    console.error("No user signed in. Cannot add/update book.");
                    return;
                }
        
                try {
                    const submitButton = document.querySelector("#book-form button[type='submit']");
                    const bookId = submitButton.getAttribute("data-editing-id");
        
                    if (bookId) {
                        //Update existing book
                        await setDoc(doc(db, "books", bookId), {
                            title,
                            author,
                            genre,
                            rating,
                            email: user.email
                        });
        
                        console.log(`Book "${title}" updated successfully.`);
                        submitButton.textContent = "Add Book"; //Reset button text
                        submitButton.removeAttribute("data-editing-id"); //Remove editing ID
                    } else {
                        //Add new book
                        await addDoc(collection(db, "books"), {
                            title,
                            author,
                            genre,
                            rating,
                            email: user.email
                        });
        
                        console.log(`Book "${title}" added successfully by ${user.email}.`);
                    }
        
                    bookForm.reset();
                    displayBooks(); //Refresh book list
                } catch (error) {
                    console.error("Error adding/updating book:", error);
                }
            });
        }                

        async function displayBooks() {
            console.log("Fetching books...");
        
            auth.onAuthStateChanged(async (user) => {
                if (!user) {
                    console.log("No user signed in. Cannot fetch books.");
                    return;
                }
        
                try {
                    const q = query(collection(db, "books"), where("email", "==", user.email));
                    const querySnapshot = await getDocs(q);
        
                    bookList.innerHTML = "";
        
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
                        bookItem.tabIndex = 0;
                        bookItem.id = bookId;
                        bookItem.innerHTML = `
                            <strong>${book.title} </strong>
                            by <span class="author-tag" data-author="${book.author}">${book.author}</span>
                            <em> (<span class="genre-tag" data-genre="${book.genre}">${book.genre}</span>) </em>
                            - Rating: ${book.rating}
                            <div class="book-actions">
                                <button class="edit-btn" data-id="${bookId}">Edit</button>
                                <button class="delete-btn" data-id="${bookId}">Delete</button>
                            </div>
                        `;
                        bookList.appendChild(bookItem);
                    });
        
                    console.log("Books successfully displayed.");
                } catch (error) {
                    console.error("Error fetching and displaying books:", error);
                }
            });
        }

        async function updateBook(bookId, newTitle, newAuthor, newGenre, newRating) {
            try {
                const bookRef = doc(db, "books", bookId); // Reference the correct book document
                await updateDoc(bookRef, {
                    title: newTitle,
                    author: newAuthor,
                    genre: newGenre,
                    rating: newRating
                });
        
                console.log(`Book "${newTitle}" updated successfully.`);
                displayBooks(); // Refresh book list after update
            } catch (error) {
                console.error("Error updating book:", error);
            }
        }

        document.getElementById("update-book").addEventListener("click", function () {
            const bookId = document.getElementById("update-book").getAttribute("data-id");
        
            if (!bookId) {
                console.error("No book selected for updating.");
                return;
            }
        
            const newTitle = document.getElementById("title").value.trim();
            const newAuthor = document.getElementById("author").value.trim();
            const newGenre = document.getElementById("genre").value.trim();
            const newRating = document.getElementById("rating").value.trim();
        
            if (!newTitle || !newAuthor || !newGenre || !newRating) {
                console.error("All fields must be filled.");
                return;
            }
        
            updateBook(bookId, newTitle, newAuthor, newGenre, newRating);
            document.getElementById("book-form").reset();
        
            // Reset form buttons
            document.getElementById("update-book").style.display = "none";
            document.getElementById("submit-book").style.display = "inline-block";
        });        

        async function filterBooksBy(field, value) {
            console.log(`Filtering books where ${field} == ${value}`);

            auth.onAuthStateChanged(async (user) => {
                if (!user) {
                    console.log("No user signed in. Cannot filter books.");
                    return;
                }

                try {
                    const q = query(collection(db, "books"), where("email", "==", user.email), where(field, "==", value));
                    const querySnapshot = await getDocs(q);

                    bookList.innerHTML = "";

                    if (querySnapshot.empty) {
                        bookList.innerHTML = `<p>No books found for ${field} "${value}".</p>`;
                        console.log(`No books found for ${field} "${value}".`);
                        return;
                    }

                    querySnapshot.forEach((doc) => {
                        const book = doc.data();
                        const bookId = doc.id;

                        // Create the filtered book list
                        const bookItem = document.createElement("li");
                        bookItem.tabIndex = 0;
                        bookItem.id = bookId;
                        bookItem.innerHTML = `
                            <strong>${book.title} </strong>
                            by <span class="author-tag" data-author="${book.author}">${book.author}</span>
                            <em> (<span class="genre-tag" data-genre="${book.genre}">${book.genre}</span>) </em>
                            - Rating: ${book.rating}
                            <div class="book-actions">
                                <button class="edit-btn" data-id="${bookId}">Edit</button>
                                <button class="delete-btn" data-id="${bookId}">Delete</button>
                            </div>
                        `;
                        bookList.appendChild(bookItem);
                    });

                    console.log("Filtered books successfully displayed.");
                } catch (error) {
                    console.error("Error fetching and displaying filtered books:", error);
                }
            });
        }

        document.addEventListener("click", async (e) => {
            if (e.target.classList.contains("author-tag")) {
                const selectedAuthor = e.target.getAttribute("data-author");
                console.log(`Filtering books by author: ${selectedAuthor}`);
                filterBooksBy("author", selectedAuthor);
            }

            if (e.target.classList.contains("genre-tag")) {
                const selectedGenre = e.target.getAttribute("data-genre");
                console.log(`Filtering books by genre: ${selectedGenre}`);
                filterBooksBy("genre", selectedGenre);
            }
        });        

        document.addEventListener("click", async function (event) {
            if (event.target.classList.contains("edit-btn")) {
                const bookId = event.target.getAttribute("data-id");
                const bookItem = event.target.closest("li");
                
                document.getElementById("title").value = bookItem.querySelector("strong").innerText;
                document.getElementById("author").value = bookItem.querySelector(".author-tag").innerText;
                document.getElementById("genre").value = bookItem.querySelector(".genre-tag").innerText;
                document.getElementById("rating").value = bookItem.innerHTML.match(/Rating: (\d+)/)[1];
        
                document.getElementById("update-book").setAttribute("data-id", bookId);
                document.getElementById("update-book").style.display = "inline-block";
                document.getElementById("submit-book").style.display = "none";
            }
            if (event.target.classList.contains("delete-btn")) {
                const bookId = e.target.getAttribute("data-id");
                try {
                    await deleteDoc(doc(db, "books", bookId));
                    console.log(`Book with ID ${bookId} deleted.`);
                    displayBooks(); // Refresh list
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

        document.getElementById("reset-filter").addEventListener("click", () => {
            console.log("Resetting book list filter...");
            displayBooks();
        });        
    }

    //Chatbot Logic
    const aiInput = document.getElementById("chat-input");
    const aiButton = document.getElementById("send-btn");
    const chatHistory = document.getElementById("chat-history");
    const chatbotContainer = document.getElementById("chatbot-container");
    const chatIcon = document.getElementById("chat-icon");

    chatbotContainer.addEventListener("click", function (event) {
        // Allow clicking on the icon to expand the chatbot
        if (!chatbotContainer.classList.contains("expanded")) {
            chatbotContainer.classList.add("expanded");
            event.stopPropagation(); // Prevent closing immediately
        }
    });
    
    //Close chatbot when clicking outside of it
    document.addEventListener("click", function (event) {
        if (!chatbotContainer.contains(event.target) && chatbotContainer.classList.contains("expanded")) {
            chatbotContainer.classList.remove("expanded");
        }
    });
    
    //Prevent clicks inside the chatbot from closing it
    chatHistory.addEventListener("click", (event) => event.stopPropagation());
    aiInput.addEventListener("click", (event) => event.stopPropagation());
    aiButton.addEventListener("click", (event) => event.stopPropagation());

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
        if (request.startsWith("sort")) {
            appendMessage("To sort through books, click either on the author's name or on the book's genre.");
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