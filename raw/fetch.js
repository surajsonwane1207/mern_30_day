// async function loadUsers() {
// try {
//     const users = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await users.json();
//     console.log(data);
//     data.forEach(user => {
//         console.log(`Name: ${user.name}, Email: ${user.email}`);
//     }); 
// } catch (error) {
//     console.error('Error fetching users:', error);
// }    
// }

// loadUsers();


let users = []
function loadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            // data.forEach(user => {
            //     console.log(`Name: ${user.name}, Email: ${user.email}`);
            // });
            users = data; // Store the fetched users in the global variable 
        })
        .catch(error => console.error('Error fetching users:', error));
}

loadUsers();    

console.log(users); // This will likely log an empty array because the fetch is asynchronous and hasn't completed yet.  
