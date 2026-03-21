// Normal Function
// function add(a, b) {
//     return a + b;
// }
// console.log(add(2, 3)); 

// Function Currying
/*
Currying is used in JavaScript to break down complex function calls into smaller, more manageable steps. It transforms a function with multiple arguments into a series of functions, each taking a single argument.

It converts a function with multiple parameters into a sequence of functions.
Each function takes a single argument and returns another function until all arguments are received.
Helps in functional programming by enabling function reusability and composition.
*/


function add(a) {
    return function(b) {
        return a + b;
    }
}

const addTwo = add(5);  // First function call with 5
console.log(addTwo(4));


function multiplyBy(a) {
    return function(b) {    
        return a * b;
    }
}

const multiplyBy10 = multiplyBy(10);  // First function call with 10
console.log(multiplyBy10(5));  // Second function call with 5

const multiplyBy20 = multiplyBy(20);  // First function call with 20    

console.log(multiplyBy20(5));  // Second function call with 5