//! Book Class: Represents a Book
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

//! UI Class: Handle UI Tasks
class IU {
  static displayBooks() {
    const StoredBooks = [
      {
        title: "Book One",
        author: "John Doe",
        isbn: "3434434",
      },
      {
        title: "Book Two",
        author: "Jane Doe",
        isbn: "37897898",
      },
      {
        title: "O ve Ben",
        author: "Necip Fazil Kısakürek",
        isbn: "3434434",
      },
    ];

    const books = StoredBooks;

    books.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book) {
    const list = document.querySelector('#book-list');

    const row = document.createElement('tr');

    row.innerHTML = `
      <td>${book.title}</td>
    `
  }


}

//! Store Class: Handles Storage

//! Events: Display Books

//! Event: Add a Book

//! Event: Remove a Book
