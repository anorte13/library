const form = document.getElementById('bookform');
const title = form.elements['booktitle'];
const author = form.elements['authorname'];
const pages = form.elements['pages'];


let myLibrary = [];
console.log(myLibrary);

function Book (title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

Book.prototype.bookInfo = function () {
    let bookData = this.title + ' by ' + this.author + ', ' + this.pages + ' pages';
    console.log(bookData);
}
function inputForm() {

    if(form.style.display === 'block') {
        form.style.display = "none";
    } else {
        form.style.display = "block";
    }
}
function addBookToLibrary() {
    let bookTitle = title.value;
    let authorName = author.value;
    let numberPages = pages.value;

    const myBook = new Book(bookTitle, authorName, numberPages);
    myLibrary.push(myBook);
    myBook.bookInfo();
}
