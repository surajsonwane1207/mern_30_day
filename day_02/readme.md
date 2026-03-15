// ES6 Features Demonstration

// 1. let and const
let variable = "I can be reassigned";
const constant = "I cannot be reassigned";

// 2. Arrow Functions
const add = (a, b) => a + b;

// 3. Template Literals
const name = "Alice";
const greeting = `Hello, ${name}!`;

// 4. Destructuring Assignment
const [first, second] = [1, 2];
const { title, author } = { title: "ES6 Guide", author: "John Doe" };

// 5. Default Parameters
function greet(name = "Guest") {
    return `Hello, ${name}!`;
}                                             
// 6. Rest and Spread Operators
function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}
    
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];

// 7. Classes
class Person {
    constructor(name) {
        this.name = name;
    }
    greet() {
        return `Hello, my name is ${this.name}`;
    }
}

// 8. Modules (Import/Export)
// In file math.js
export function multiply(a, b) {
    return a * b;
}

// In another file
import { multiply } from './math.js';

// 9. Promises
const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Data fetched"), 1000);
    });
};          
fetchData().then(data => console.log(data)).catch(error => console.error(error));

// 10. Enhanced Object Literals
const x = 10;
const y = 20;
const point = { x, y, move() { return `Moving to (${this.x}, ${this.y})`; } };

// 11. Map and Set
const myMap = new Map();
myMap.set('key1', 'value1');
myMap.set('key2', 'value2');

const mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(2); // Duplicate, will not be added

console.log(myMap);
console.log(mySet);

