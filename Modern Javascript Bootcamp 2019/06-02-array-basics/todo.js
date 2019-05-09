// This is a stand-alone JavaScript file. It can be run in node.js.
// At the terminal prompt, type: node filename.js. 
// Note: you must be in the subdirectory where the JavaScript file is located.

// The toDoList array is utilized in three ways:
// 1. 

const toDoList = ['walk the dog', 'walk the cat', 'code', 'eat', 'cook'];
console.log(`You have ${toDoList.length} todos.`);
console.log(`ToDos: ${toDoList[0]}`);
console.log(`ToDos: ${toDoList[toDoList.length - 2]}`);
