
// setting up a array
const averageTemp = [12, 15, 18, 20, 25]
console.log(averageTemp[0]);

// declaring, creating and initializing an array

let daysOfWeek = new Array(); // creating a empty array
daysOfWeek = new Array(7); // creating a empty array and specifiying length of 7
daysOfWeek = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'); // initialize

// using brackets
daysOfWeek = []; // new array
daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'] // initialize

console.log(daysOfWeek.length);

// for looping an array
for(let i = 0; i < daysOfWeek.length; i++) {
    console.log(`daysOfWeek[${i}]`, daysOfWeek[i]);
}

// finding first 20 numbers of fibonacci sequence
const fibonacci = [];
fibonacci[1] = 1;
fibonacci[2] = 1;

for(let i = 3; i < 20; i++) {
    fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
}

for(let i = 1; i < fibonacci.length; i++) {
    console.log(`fibonacci[${i}]`, fibonacci[i]);
}

// for in loop
for(const i in fibonacci) {
    console.log(`fibonacci[${i}]`, fibonacci[i]);
}

// for of loop
for(const value of fibonacci) {
    console.log('value', value);
}


// adding elements
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// inserting element at end of the array
numbers[numbers.length] = 10;
numbers.push(11); // using .push()
numbers.push(12, 13)


// inserting an element in the first position
Array.prototype.insertAtBeginning = function(value) {
    for(let i = this.length; i >= 0; i--) {
        this[i] = this[i-1];
    }
    this[0] = value;
};

numbers.insertAtBeginning(-1);


// alternative to inserting element in first position
numbers.unshift(-2);
numbers.unshift(-4, -3);

// removing an element from the end of the array
numbers.pop()
console.log("Removed Element: ", numbers.pop()); // returns value removed


// removing an element from the first position
for(let i = 0; i < numbers.length; i++) {
    numbers[i] = numbers[i+1]
}
// drawback: the array's original values are overwritten


// DO NOT USE
Array.prototype.reIndex = function(myArray) {
    const newArray = [];
    for(let i = 0; i < myArray.length; i++) {
        if(myArray[i] !== undefined) {
            myArray.push(myArray[i]);
        }
    }
    return myArray;
}

// remove first position manually and reindex
Array.prototype.removeFromBeginning = function() {
    for(let i = 0; i < this.length; i++) {
        this[i] = this[i+1];
    }
    return this.reIndex(this);
};

numbers = numbers.removeFromBeginning();


// alternative: use shift()
numbers.shift()



