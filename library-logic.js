
let myLibrary = [];
console.log(myLibrary);

function Book (title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function inputForm() {
    const form = document.getElementById('bookform');
    if(form.style.display === 'block') {
        form.style.display = "none";
    } else {
        form.style.display = "block";
    }
}
function addBookToLibrary() {
    const books = document.getElementById('booktitle');
    const authors = document.getElementById('authorname');
    const page = document.getElementById('pages');

    const myBook = new Book(books, authors, page);
    myLibrary.push(myBook);
}
