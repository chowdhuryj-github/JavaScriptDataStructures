
console.log('Hello, World!');

var num = 1;
num = 'one';
console.log(num);

let myVar = 2;
myVar = 4;
console.log(myVar);

// declring and printing variables
const price = 1.5;
const publisher = 'Packt';
const javaScriptBook = true;
const nullVar = null;
let und;

console.log("price: " + price);
console.log("publisher: " + publisher);
console.log("javaSciptBook: " + javaScriptBook);
console.log("nullVar: " + nullVar);
console.log("und: " + und);

// checking the type
console.log(typeof price);
console.log(typeof nullVar);

// objects are key-value pairs
const book = {
    title: 'Data Structure and Algorithms',
}

console.log('book title: ', book.title);

// mutating an object
let book2 = {
    title: 'Data Structures and Algorithms',
}
book2 = {title : 'Data Structures'};
console.log('title: ', book2.title)


// symbols
const title = Symbol('title');
const book3 = {
    [title] : 'Data Structures & Algorithms'
};
console.log(book3[title])