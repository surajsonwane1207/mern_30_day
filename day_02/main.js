console.log("Hello, World!");

const users = ["ram","shyam","hari"];

console.log(users);

const user = {
    name: "ram",
    age: 20,
    city: "kathmandu"
}

console.log(user);

const user1 = {
    name: "shyam",
    age: 25,
    city: "pokhara"
}

console.log(user1);

const user2 = {
    name: "hari",
    age: 30,
    city: "biratnagar"
}

console.log(user2);
    
const usersArray = [user, user1, user2];    

console.log(JSON.stringify(usersArray));

const userWith25 = usersArray.filter(user => user.age > 25);

console.log(userWith25);

const userNames = usersArray.map(user => user.name);

console.log(userNames);