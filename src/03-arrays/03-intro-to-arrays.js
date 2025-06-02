
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




