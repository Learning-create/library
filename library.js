const myLibrary = [];

const dialog = document.querySelector("dialog");
const bookForm = document.getElementById("bookForm");
const closeBtn = document.getElementById("closeBtn");
const showBtn = document.querySelector(".add button");

//var for form

let title = document.getElementById("title");
    let author = document.getElementById("author");
    let pages = document.getElementById("pages");
    let chread = document.getElementById("read");



//New Book button opens dialogue box and closeBtn closes it

showBtn.addEventListener("click", () => {
    dialog.showModal();
});

closeBtn.addEventListener("click", () => {

    chread.checked = false;
    title.value = "";
    author.value = "";
    pages.value = "";

    dialog.close();

})

//Collects dialoge's form data

bookForm.addEventListener("submit", (e) => {
    e.preventDefault();

    if (title.value == "" || author.value == "" || pages.value == "") {
        alert("Please check if you forgot something");
    } else {

        if (chread.checked == true) {
            
            read = "I've already read it";
            chread.checked = false;

        } else {

            read = "not yet";

        }

       let newBook = new Book(title.value,author.value,pages.value,read);
       
        title.value = "";
        author.value = "";
        pages.value = "";
        
        dialog.close() 

    }
    
    
})


//Adds a new card with each book

function addCard(title, author, pages, read) {
    var element = document.createElement("div");
    element.className = "card";
    document.querySelector(".container").appendChild(element);
    element.innerHTML = `
    <p class="title">${title}</p>
    <p class="author">${author}</p>
    <p class="pages">${pages}</p>
    <p class="read">${read}</p>
    <button class="readBtn">Read</button>
    <button class="removeBook">Remove</button>
    `
    
}  

//Book object contructor

function Book(title, author, pages, read) {

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function() {
        return `${this.name} by ${this.author}, ${pages} pages, ${read}`;
    };

    addCard(title, author, pages, read);
    addBookToLibrary(this);
    console.log(myLibrary);

}

//Adds books to myLibrary array

function addBookToLibrary(book) {
    let arrNum = myLibrary.length;
    book.num = arrNum;
    myLibrary.push(book);
    
}

//remove book from myLibrary


//test book(s)

const theHobbit = new Book("The Hobbit", "J.R.R Tolkien", 295, "not read yet");
const Mocking = new Book("To Kill a Mockingbird", "Harper Lee", 281, "not read yet")
