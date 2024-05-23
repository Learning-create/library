const myLibrary = [];

function Book(title, author, pages, read) {

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function() {
        return `${this.name} by ${this.author}, ${pages} pages, ${read}`;
    };

}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

const theHobbit = new Book("The Hobbit", "J.R.R Tolkien", 295, "not read yet");

// Create a new paragraph element, and append it to the end of the document body


function test()
{
    var element = document.createElement("div");
    element.className = "card";
    document.querySelector(".container").appendChild(element);
    //document.body.appendChild(element);
}
test()


//display the values of books (rn just theHobbit)
document.querySelector(".title").textContent = `${theHobbit.title}`;
document.querySelector(".author").textContent = `${theHobbit.author}`;
document.querySelector(".pages").textContent = `${theHobbit.pages}`;
document.querySelector(".read").textContent = `${theHobbit.read}`;
