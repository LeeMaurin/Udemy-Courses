// This is a stand-alone JavaScript file. It can be run in node.js.
// At the terminal prompt, type: node manipulation.js.
// Note: you must be in the subdirectory where the JavaScript file is located.

// The following code displays to the console various changes to the array.

let toDoList = ['walk the dog', 'walk the cat', 'code', 'eat', 'cook'];

console.log(toDoList.splice(2, 1)); // removes 'code' from the array
console.log(toDoList);
toDoList.push('workout');  // adds the element 'workout' to the array
console.log(toDoList);
toDoList.pop();  // removes the last element, 'workout' from the array
console.log(toDoList);
console.log(`You have ${toDoList.length} todos.`);  // returns to the console a statement 'You have 4 todos'.
