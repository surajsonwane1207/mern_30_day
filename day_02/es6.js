// let and const Keywords
// Arrow Functions
// Multi-line Strings
// Default Parameters
// Template Literals
// Destructuring Assignment
// Enhanced Object Literals
// Promises
// Classes
// Modules


var user = "suraj"
const pi = 3.14

// Arrow Function
const add = (a, b) => a + b;

// Multi-line String
const message = `Hello,
This is a multi-line string.`;

// Default Parameters
function greet(name = "Guest") {
    return `Hello, ${name}!`;
}

// Template Literals
const name = "Alice";
const greeting = `Hello, ${name}!`;

// Destructuring Assignment
const person = { name: "Bob", age: 30 };
const { name: personName, age } = person;

// Enhanced Object Literals
const x = 10;
const y = 20;
const point = { x, y };

// Promises
const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched");
        }, 1000);
    });
}
fetchData().then(data => console.log(data));

async function fetchDataAsync() {
    try {
        const data = await fetchData();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}
fetchDataAsync();

// Classes
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}
const person1 = new Person("Charlie", 25);
console.log(person1.greet());

// Modules
// In a separate file (module.js):
// export const pi = 3.14;
// export function add(a, b) {
//     return a + b;
// }

// In the main file:
// import { pi, add } from './module.js';
// console.log(pi); // 3.14
// console.log(add(2, 3)); // 5
