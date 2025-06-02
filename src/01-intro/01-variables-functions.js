
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



// using conditionals
let number = 0;
if (number === 1) {
    console.log('number is equal to 1');
} else {
    console.log("number isn't equal to one, value is " + number);
}

// using a ternary operator
number = number === 1 ? number - 1 : number + 1;
console.log(number);

// else-if conditionals
let month = 5;
if(month === 1) {
    console.log('January');
} else if(month === 2) {
    console.log('February');
} else {
    console.log("Month is not January or February");
}

// switch-case
switch(month) {
    case 1:
        console.log('January');
        break;
    case 2:
        console.log('February');
        break;
    default:
        console.log("Month is not January or February");
}

// for loop
for(let i  = 0; i < 3; i++) {
    console.log(i);
}

// while loop
let j = 0;
while(j < 3) {
    console.log(j);
    j++;
}

// do while loop
let k = 0;
do {
    console.log(k);
    k++;
} while ( k < 3)


// for...in loop
const obj = {a:1 , b:2, c:3};
for(const key in obj) {
    console.log(key, obj[key]);
}

// for...of loop
const arr = [1, 2, 3];
for(const value of arr) {
    console.log(value);
}



// function
function sayHello(name) {
    console.log("Hello!", name);
}
sayHello('Packt');

// function that returns a value
function sum(num1, num2) {
    return num1 + num2;
}

const result = sum(1, 2);
console.log("Sum: " + result);

// function with default values
function sumDefault(num1, num2 = 2) {
    return num1 + num2;
}

console.log(sumDefault(1));
console.log(sumDefault(1, 3));

// variable scope
let movie = 'Lord of the Rings'; // the global movie
function starWarsFan() {
    const movie = 'Star Wars';
    return movie;
}
function marvelFan() {
    // assigns to the global movie
    movie = 'The Avengers';
    return movie;
}
console.log(movie);
console.log(starWarsFan());
console.log(marvelFan());
console.log(movie);

// variable scope (second example)
function blizzardFan() {

    const isFan = true;

    let phrase = 'Warcraft';
    console.log('Before if: ' + phrase);

    if(isFan) {

        let phrase = 'initial text';
        phrase = 'For the Horde!';
        console.log('Inside If: ' + phrase);

    }

    phrase = 'For the Alliance';
    console.log('After if: ' + phrase);


}

blizzardFan();