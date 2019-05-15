// This is a stand-alone JavaScript file. It can be run in node.js. 
// At the terminal prompt, type: node loop.js. 
// Note: you must be in the subdirectory where the JavaScript file is located.

// The forEach loop displays each element in the array.

let toDoList = ['walk the dog', 'walk the cat', 'code', 'eat', 'cook'];

toDoList = toDoList.splice(0, 2);
toDoList.forEach(function(item, index) {
  console.log(`${index + 1}. ${item}.`);
});

// The following is the output:

// 1. walk the dog
// 2. walk the cat
// 3. code
// 4. eat
// 5. cook
