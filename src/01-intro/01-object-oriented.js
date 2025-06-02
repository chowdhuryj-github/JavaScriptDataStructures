

// js objects are name-value pairs
let obj = new Object(); // 1
obj = {} // 2 (object literal)

obj = {
    name: {
        first: "Gandalf",
        last: "the Grey"
    },
    address: "Middle Earth"
};

console.log("First Name: " + obj.name.first);
console.log("Last Name: " + obj.name.last);



// class that represents a book
class Book {

    // private
    #percentagePerSale = 0.12;

    constructor(title, pages, isbn) {
        this.title = title;
        this.pages = pages;
        this.isbn = isbn;
    }

    // getter method
    get price() {
        return this.pages * this.#percentagePerSale;
    }

    // belongs to class, not an instance
    static copiesSold = 0;
    
    // belongs to class, not an instance
    static sellCopy() {
        this.copiesSold++;
    }

    // instance method
    printIsbn() {
        console.log(this.isbn);
    }
}

// instantiating the class
let myBook = new Book('title', 400, 'isbn')
console.log(myBook.title);
myBook.title = 'New Title';
console.log(myBook.title);
console.log("Price: " + myBook.price);

// access static stuff using the name of the class
console.log(Book.copiesSold);
Book.sellCopy();
console.log(Book.copiesSold);
Book.sellCopy();
console.log(Book.copiesSold);


// inheritance
class Ebook extends Book {
    constructor(title, pages, isbn, format) {
        super(title, pages, isbn);
        this.format = format;
    }

    // overriding the parent class method
    printIsbn() {
        console.log('EBook ISBN: ', this.isbn);
    }    

}

Ebook.sellCopy();
console.log("EBook Copies Sold: " + Ebook.copiesSold);


// polymorphism
const newBook = new Book('Title', 400, 'isbn');
myBook.printIsbn();
const myEbook = new Ebook('DS Ebook', 401, 'isbn 123', 'pdf');
myEbook.printIsbn();

