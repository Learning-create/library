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

    read.checked = false;
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

       let newBook = new Book(title.value,author.value,pages.value,read.checked);
       
        title.value = "";
        author.value = "";
        pages.value = "";
        read.checked = false
        
        dialog.close() 


    }
    
    
})


//Adds a new card with each book

function addCard(title, author, pages, read) {

    let book = myLibrary.find(book => book.title === title)

    if (read === true) {
        read = "read"
    } else {
        read = "not read"
    }
    
    var element = document.createElement("div");
    element.className = "card";
    document.querySelector(".container").appendChild(element);
    element.innerHTML = `
    <div>
        <p class="title">${title}</p>
        <p class="author">By<br>${author}</p>
    </div>
    <p class="pages">${pages} pages</p>
    <button class="readBtn" data-title="${book.title}"></button>
    <button class="removeBook" data-title="${book.title}">
        <svg viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
            <path d="M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 27.9999 47.9219 C 16.9374 47.9219 8.1014 39.0625 8.1014 28 C 8.1014 16.9609 16.9140 8.0781 27.9765 8.0781 C 39.0155 8.0781 47.8983 16.9609 47.9219 28 C 47.9454 39.0625 39.0390 47.9219 27.9999 47.9219 Z M 22.2343 41.9687 L 33.7187 41.9687 C 35.3827 41.9687 36.3436 41.0547 36.4374 39.3906 L 37.3046 20.2656 L 38.6640 20.2656 C 39.2968 20.2656 39.8124 19.7266 39.8124 19.0937 C 39.8124 18.4375 39.2968 17.9219 38.6640 17.9219 L 33.3671 17.9219 L 33.3671 16.0234 C 33.3671 14.1953 32.1483 13.0469 30.4140 13.0469 L 25.5155 13.0469 C 23.7812 13.0469 22.5858 14.1953 22.5858 16.0234 L 22.5858 17.9219 L 17.2655 17.9219 C 16.6327 17.9219 16.0936 18.4375 16.0936 19.0937 C 16.0936 19.7266 16.6327 20.2656 17.2655 20.2656 L 18.6718 20.2656 L 19.5390 39.3906 C 19.6093 41.0547 20.5936 41.9687 22.2343 41.9687 Z M 24.9296 17.9219 L 24.9296 16.4688 C 24.9296 15.8359 25.3749 15.4141 26.0077 15.4141 L 29.8514 15.4141 C 30.5077 15.4141 30.9530 15.8359 30.9530 16.4688 L 30.9530 17.9219 Z M 23.6405 39.3906 C 23.1249 39.3906 22.7733 39.0156 22.7499 38.4531 L 22.1171 22.7266 C 22.0936 22.1875 22.4687 21.7890 23.0546 21.7890 C 23.5936 21.7890 23.9452 22.1641 23.9921 22.7266 L 24.5546 38.4297 C 24.5780 38.9922 24.2265 39.3906 23.6405 39.3906 Z M 27.9530 39.3672 C 27.3905 39.3672 26.9921 38.9922 26.9921 38.4297 L 26.9921 22.7266 C 26.9921 22.1875 27.3671 21.7890 27.9530 21.7890 C 28.5390 21.7890 28.9140 22.1875 28.9140 22.7266 L 28.9140 38.4297 C 28.9140 38.9922 28.5390 39.3672 27.9530 39.3672 Z M 32.2890 39.3906 C 31.7030 39.3906 31.3514 38.9922 31.3749 38.4297 L 31.9374 22.7266 C 31.9609 22.1641 32.3358 21.7890 32.8514 21.7890 C 33.4374 21.7890 33.8358 22.1875 33.8124 22.7266 L 33.1796 38.4531 C 33.1562 39.0156 32.8046 39.3906 32.2890 39.3906 Z"></path>
            </g>
        </svg>
    </button>
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
                
                if (book.read === false) {
                    book.read = true
                    readBtn[i].style.backgroundColor = "green";
                    readBtn[i].textContent = "Read"
                } else {
                    book.read = false
                    readBtn[i].style.backgroundColor = "red"
                    readBtn[i].textContent = "not Read"
                }

            })
            if (read === "not read") {
                readBtn[i].style.backgroundColor = "red"
                readBtn[i].textContent = "not Read"
            } else {
                readBtn[i].style.backgroundColor = "green"
                readBtn[i].textContent = "Read"
            }
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

const Circe = new Book("Circe","Madeline Miller", 393, true)


//remove book from myLibrary

function removeFromLibrary(title) {
    book =  myLibrary.find(book => book.title === title);
    index = myLibrary.indexOf(book);
    if (index > -1) {
        myLibrary.splice(index, 1);
    }    
}

// remove card

function removeCard(title) {
    parent = document.querySelector(`[data-title="${title}"]`).parentNode;
    console.log(parent);
    parent.remove();
}