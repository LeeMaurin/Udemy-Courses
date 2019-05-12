// This is a stand-alone JavaScript file. It can be run in node.js. 
// At the terminal prompt, type: node filename.js. 
// Note: you must be in the subdirectory where the JavaScript file is located.

// This for loop writes the array to the console with array index numbers

let toDoList = ['walk the dog', 'walk the cat', 'code', 'eat', 'cook'];

for (let count = 0; count < toDoList.length-1; count++) {
  console.log(`${count + 1}. ${toDoList[count]} `);
}

// Here is the output: 
