
// normal way of doing functions
const circleAreaFn = function(radius) {
    const PI = 3.14;
    const area = PI * radius * radius;
    return area;
};

console.log(circleAreaFn(2));

// using arrows
const circleArea = (radius) => {
    const PI = 3.14;
    return PI * radius * radius;
};

// even simpler version
const circleAreaSimp = radius => 3.14 * radius * radius;
console.log(circleAreaSimp(2))

// without a argument
const hello = () => console.log('hello');
hello();


// spread and rest operators - allows multi-paramters
const sum = (x, y, z) => x + y + z
const numbers = [1, 2, 3];
console.log(sum(...numbers)); // ... is the spread operator
console.log(sum.apply(null, numbers));

// the spread operator  
      // name of function     // parameters   // operations
const restParameterFunction = (x, y, ...a) => (x + y) * a.length;
console.log(restParameterFunction(1, 2, 'hello', true, 7));

// same as the previous function
function restParameterFunctionTwo(x, y) {
    const a = Array.prototype.slice.call(arguments, 2);
    return (x + y) * a.length;
}
console.log(restParameterFunctionTwo(1, 2, 'hello', true, 7));

// exponentiation operator
let radius = 10;
let area = 3.14 * radius * radius;
area = 3.14 * Math.pow(radius, 2)
area = 3.14 * (radius ** 2)

