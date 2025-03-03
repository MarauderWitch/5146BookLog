document.addEventListener("DOMContentLoaded", function () {
    const bookForm = document.getElementById("book-form");
    const bookList = document.getElementById("book-list");

    // Function to add a book to Firebase
    function addBook(title, author, genre, rating) {
        const bookRef = db.ref("books").push();
        bookRef.set({
            title,
            author,
            genre,
            rating
        });
    }

    // Function to fetch books from Firebase
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

    // Function to display a book in the UI
    function displayBook(book, bookId) {
        const bookItem = document.createElement("li");
        bookItem.innerHTML = `
            <strong>${book.title}</strong> by ${book.author} <em>(${book.genre})</em> - Rating: ${book.rating}
            <button onclick="editBook('${bookId}')">Edit</button>
            <button onclick="deleteBook('${bookId}')">Delete</button>
        `;
        bookList.appendChild(bookItem);
    }

    // Function to delete a book
    function deleteBook(bookId) {
        db.ref(`books/${bookId}`).remove();
    }

    // Handle form submission
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
});