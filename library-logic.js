const form = document.getElementById('bookform');
let error = document.getElementById('error');


const title = form.elements['booktitle'];
const author = form.elements['authorname'];
const pages = form.elements['pages'];
const read = form.elements['status']



let bookTitle;
let authorName;
let numberPages;
let readStatus;
let myLibrary = [];
let bookInfo;

function Book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}
function inputForm() {
    if(form.style.display === 'block') {
        form.style.display = "none";
    } else {
        form.style.display = "block";
    }
}
function addBookToLibrary() {
    bookTitle = title.value;
    authorName = author.value;
    numberPages = pages.value;

    if (read.checked) {
        readStatus = 'Read';
    }
    else {
        readStatus = 'Not Read';
    }
    let myBook = new Book(bookTitle, authorName, numberPages, readStatus);
    myLibrary.push(myBook);
    bookAdded();
    showLibrary();
}

function bookAdded() {
    let msg = document.getElementById("demo");
    msg.textContent = 'Your book was added to your library!';
    msg.style.color = 'green';
}
function showLibrary() {
    if(myLibrary.length === 0) {
        error.textContent = 'There are no books in library, please add some';
    }
    else {
        for (let i = 0; i < myLibrary.length; i++) {
            error.textContent = myLibrary[i].title + ' by ' + myLibrary[i].author + ', ' + myLibrary[i].pages + ' pages ' + myLibrary[i].read;
        }
    }
}
function clearForm() {
    form.reset();
}