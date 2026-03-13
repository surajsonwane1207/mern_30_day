

# JavaScript Basics

This file contains basic JavaScript concepts including variables, arrays, objects, and functions.   
## Variables
In JavaScript, you can declare variables using `var`, `let`, or `const`.
```javascript
var user = "suraj";
let first_name = "suraj";
const last_name = "sonwane";

console.log(user);
console.log(first_name);
console.log(last_name);
```

## Arrays
An array is a data structure that can hold multiple values. You can create an array using square brackets `[]`.
```javascript
let fruits = ["apple", "banana", "orange"];
console.log(fruits);
```

## Objects
An object is a collection of key-value pairs. You can create an object using curly braces `{}`. 

```javascript
let person = {
    name: "suraj",
    age: 25,
    city: "pune"
};

// Object.freeze(person) // This will make the object immutable

person.name = "sonwane"; // This will not change the name property of the person object

console.log(person);    
```

## Date
You can create a new date object using the `Date` constructor. The `toString()` method converts the date to a string representation.
```javascript
console.log(new Date().toString());
``` 
    