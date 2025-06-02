

let age = 20; // number
let existsFlag = true; // boolean
let language = 'JavaScript'; // string

let favoriteLanguage: string;
let langs = ['JavaScript', 'Ruby', 'Python'];
favoriteLanguage = langs[0];

// when typing a variable, use all lower case

// interface as a type
interface Person {
    name: string;
    age: number;
}

// function for printing a name
function printName(person: Person) {
    console.log(person.name);
}

// duck typing
const john = { name: 'John', age: 21};
const mary = { name: 'Mary', age: 21, phone: '123-45678'};
printName(john)
printName(mary)

// OOP interface
interface Comparable {
    compareTo(b: any) : number;
}

class MyObject implements Comparable {

    age: number;

    constructor(age: number) {
        this.age = age;
    }

    compareTo(b: any): number {
        if(this.age === b.age) {
            return 0;
        }

        return this.age > b.age ? 1 : -1;
    }
}

function compareTwoObjects(a: Comparable, b: Comparable) {
    console.log(a.compareTo(b));
    console.log(b.compareTo(a));
}

const obj1 = new MyObject(10);
const obj2 = new MyObject(11);
compareTwoObjects(obj1, obj2);



