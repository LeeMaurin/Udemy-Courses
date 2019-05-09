// This is a stand-alone JavaScript file. It can be run in node.js.
// At the terminal prompt, type: node filename.js. 
// Note: you must be in the subdirectory where the JavaScript file is located.

// The toDoList array is utilized to generate three outputs: 

const toDoList = ['walk the dog', 'walk the cat', 'code', 'eat', 'cook'];

console.log(`You have ${toDoList.length} todos.`);  // returns "You have 5 todos"
console.log(`ToDos: ${toDoList[0]}`); // returns the first array element in "ToDos: walk the dog"
console.log(`ToDos: ${toDoList[toDoList.length - 2]}`); // returns the second-to-last element in "ToDos: eat" 
