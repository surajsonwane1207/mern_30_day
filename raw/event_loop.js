console.log("Start"); // 1. Synchronous
setTimeout(() => console.log("Timeout"), 0); // 3. Macrotask
Promise.resolve().then(() => console.log("Promise")); // 2. Microtask api has higher priority than setTimeout
console.log("End"); // 1. Synchronous
