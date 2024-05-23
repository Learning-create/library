const myLibrary = [];

function addCard(title, author, pages, read) {
    var element = document.createElement("div");
    element.className = "card";
    document.querySelector(".container").appendChild(element);
    element.innerHTML = `
    <p class="title">${title}</p>
    <p class="author">${author}</p>
    <p class="pages">${pages}</p>
    <p class="read">${read}</p>
    `
    
}  



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

function addBookToLibrary(book) {
    myLibrary.push(book);
}

const theHobbit = new Book("The Hobbit", "J.R.R Tolkien", 295, "not read yet");
const Mocking = new Book("To Kill a Mockingbird", "HArper Lee", 281, "not read yet")

/*display the values of books (rn just theHobbit)
document.querySelector(".title").textContent = `${theHobbit.title}`;
document.querySelector(".author").textContent = `${theHobbit.author}`;
document.querySelector(".pages").textContent = `${theHobbit.pages}`;
document.querySelector(".read").textContent = `${theHobbit.read}`;
*/

