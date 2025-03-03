//Making sure Firebase is initialised
if (typeof firebase === "undefined") {
    console.error("Firebase SDK not loaded correctly.");
} else {
    const auth = firebase.auth();
    const db = firebase.database(); // ✅ Define Firebase Database

    // ✅ Declare sign-in function globally before DOM loads
    function signInWithGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider)
            .then((result) => {
                console.log("User signed in:", result.user);
                window.location.href = "dashboard.html"; // ✅ Redirect on success
            })
            .catch((error) => {
                console.error("Error during sign-in:", error.message);
            });
    }

    // ✅ Make function globally accessible for `index.html`
    window.signInWithGoogle = signInWithGoogle;

    // ✅ Wait for DOM to load
    document.addEventListener("DOMContentLoaded", () => {
        // ✅ If on `dashboard.html`, initialize book-related logic
        if (document.getElementById("book-form")) {
            const bookForm = document.getElementById("book-form");
            const bookList = document.getElementById("book-list");

            // Add a book to Firebase
            function addBook(title, author, genre, rating) {
                const bookRef = db.ref("books").push();
                bookRef.set({ title, author, genre, rating });
            }

            // Fetch books from Firebase
            function fetchBooks() {
                db.ref("books").on("value", (snapshot) => {
                    bookList.innerHTML = "";
                    snapshot.forEach((childSnapshot) => {
                        const book = childSnapshot.val();
                        const bookId = childSnapshot.key;
                        displayBook(book, bookId);
                    });
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
            }

            // Delete a book
            function deleteBook(bookId) {
                db.ref(`books/${bookId}`).remove();
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