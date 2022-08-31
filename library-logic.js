const form = document.getElementById('bookform');
let error = document.getElementById('error');

const title = form.elements['booktitle'];
const author = form.elements['authorname'];
const pages = form.elements['pages'];
const read = form.elements['status']
const container = document.getElementById('book-container');

let bookTitle;
let authorName;
let numberPages;
let readStatus;
let myLibrary = [];
let bookInfo;

let bookInfotitle;
let bookInfoauthor;
let bookInfopages;
let bookInforead;

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
    const newDiv = document.createElement('div');
    const newTitleDiv = document.createElement('div');
    const newAuthorDiv = document.createElement('div');
    const newPagesDiv = document.createElement('div');
    const newReadStatus = document.createElement('div');

    if (myLibrary.length === 0) {
        error.innerHTML = 'There are no books in library, please add some';
    }
    else {
        error.innerHTML = '';
        for (let i = 0; i < myLibrary.length; i++) {
            newDiv.id = 'book' + i;
            newDiv.classList = 'book-card';
            newTitleDiv.classList = 'book-title';
            newAuthorDiv.classList = 'author-title';
            newPagesDiv.classList = 'number-pages';
            newReadStatus.classList = 'read-status';

            bookInfotitle = myLibrary[i].title;
            bookInfoauthor = myLibrary[i].author;
            bookInfopages = myLibrary[i].pages;
            bookInforead = myLibrary[i].read;
            
            createBookCards(newDiv, newTitleDiv, newAuthorDiv, newPagesDiv, newReadStatus);
            container.appendChild(newDiv);
        }
        addBookInfo(bookInfotitle, bookInfoauthor, bookInfopages, bookInforead, newTitleDiv, newAuthorDiv, newPagesDiv, newReadStatus, newDiv);
    }
}
function clearForm() {
    form.reset();
}
function createBookCards(div, title, author, pages, read) {
    div.appendChild(title);
    div.appendChild(title);
    div.appendChild(author);
    div.appendChild(pages);
    div.appendChild(read);
}
function addBookInfo(title, author, pages, read, div, div2, div3, div4, div5) {
    const btn = document.createElement('button');
    const btn2 = document.createElement('button');
    btn2.classList = 'button-delete'
    btn.textContent = read;
    btn2.textContent = 'Remove'

    if(btn.textContent === 'Read') {
        btn.classList = 'button-read';
    }
    else {
        btn.classList = 'button-not-read';
    }
    div.innerHTML =  title;
    div2.innerHTML = 'Author: ' + author;
    div3.innerHTML = 'Pages: ' + pages;
    div4.appendChild(btn);
    div4.appendChild(btn2);

    btn.addEventListener('click', function(e){
        if(btn.textContent === 'Read'){
            btn.classList = 'button-not-read';
            btn.textContent = 'Not Read';
        }
        else if (btn.textContent === 'Not Read') {
            btn.classList = 'button-read';
            btn.textContent = 'Read'
        }
    });
    btn2.addEventListener('click', function(e){
        const element  = document.getElementById(`${div5.id}`);
        element.remove();
    })
}
