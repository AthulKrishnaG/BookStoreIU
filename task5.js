// JSON Data Structure and Initialization

let books = [
  { title: "1984", author: "George Orwell", year: 1949, genre: "Dystopian" },
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, genre: "Classic" },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925, genre: "Novel" }
];

// Displaying Data with JavaScript

function displayBooks() {
  const tableBody = document.getElementById("bookTableBody");
  tableBody.innerHTML = ""; // Clear existing rows
  books.forEach((book, index) => {
    const row = `<tr>
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.year}</td>
      <td>${book.genre}</td>
    </tr>`;
    tableBody.innerHTML += row;
  });
}


// Update Functionality

function updateBook() {
  const title = document.getElementById("title").value;
  const index = books.findIndex(book => book.title === title);
  if (index !== -1) {
    books[index] = {
      title,
      author: document.getElementById("author").value,
      year: parseInt(document.getElementById("year").value),
      genre: document.getElementById("genre").value
    };
    displayBooks();
  } else {
    alert("Book not found.");
  }
}


// Removing a Book by Title

function deleteBook() {
  const title = document.getElementById("deleteTitle").value;
  books = books.filter(book => book.title !== title);
  displayBooks();
}


// Input Validation

function validateInputs(title, author, year, genre) {
  if (!title || !author || !year || !genre) {
    alert("All fields must be filled.");
    return false;
  }
  if (isNaN(year) || year < 1000 || year > new Date().getFullYear()) {
    alert("Please enter a valid year.");
    return false;
  }
  return true;
}



