const myLibrary = [];

const dialog = document.querySelector("dialog");
const bookForm = document.getElementById("bookForm");
const closeBtn = document.getElementById("closeBtn");
const showBtn = document.querySelector(".add button");


//var for form

let title = document.getElementById("title");
    let author = document.getElementById("author");
    let pages = document.getElementById("pages");
    let read = document.getElementById("read");


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

       let newBook = new Book(title.value,author.value,pages.value,read);
       
        title.value = "";
        author.value = "";
        pages.value = "";
        
        dialog.close() 

    }
    
    
})


//Adds a new card with each book

function addCard(title, author, pages, read) {

    let book = myLibrary.find(book => book.title === title)

    if (read === true) {
        read = "read"
    } else {
        read = "not yet"
    }
    
    var element = document.createElement("div");
    element.className = "card";
    document.querySelector(".container").appendChild(element);
    element.innerHTML = `
    <p class="title">${title}</p>
    <p class="author">${author}</p>
    <p class="pages">${pages}</p>
    <p class="read" data-title="${book.title}">${read}</p>
    <button class="readBtn" data-title="${book.title}">Read</button>
    <button class="removeBook" data-title="${book.title}">Remove</button>
    `

    let rmvBtn = document.querySelectorAll(".removeBook");

    for (let i = 0; i < rmvBtn.length; i++) {


        if (!rmvBtn[i].classList.contains("listening")) {

            rmvBtn[i].addEventListener("click", () => {
                title = rmvBtn[i].getAttribute("data-title");
                removeFromLibrary(title)
                removeCard(title)
            })

            rmvBtn[i].classList.add("listening")
        } 




    }

    let readBtn =document.querySelectorAll(".readBtn");

    for (let i = 0; i < readBtn.length; i++) {
        
        if (!readBtn[i].classList.contains("listening")) {

            readBtn[i].addEventListener("click", () => {

                title = readBtn[i].getAttribute("data-title");
                book = myLibrary.find(book => book.title === title)
                console.log(book.read)
                
                if (book.read === false) {
                    book.read = true
                } else {
                    book.read = false
                }


                
                console.log(book.read)

            })

            readBtn[i].classList.add("listening")
        } 

    }
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
    addBookToLibrary(this);
    addCard(title, author, pages, read);

}

//Adds books to myLibrary array

function addBookToLibrary(book) {
    myLibrary.push(book);
    
}


//test book(s)

const theHobbit = new Book("The Hobbit", "J.R.R Tolkien", 295, false);
const Mocking = new Book("To Kill a Mockingbird", "Harper Lee", 281, true)

//remove book from myLibrary

function removeFromLibrary(title) {
    book =  myLibrary.find(book => book.title === title);
    index = myLibrary.indexOf(book);
    console.log(index);
    if (index > -1) {
        myLibrary.splice(index, 1);
    }    
    console.log(myLibrary)
}

// remove card

function removeCard(title) {
    parent = document.querySelector(`[data-title="${title}"]`).parentNode;
    console.log(parent);
    parent.remove();
}