// This is a stand-alone JavaScript file. It can be run in node.js. 
// At the terminal prompt, type: node filename.js. 
// Note: you must be in the subdirectory where the JavaScript file is located.
// 
// The for loop prints out the elements of the array.

let toDoList = ['walk the dog', 'walk the cat', 'code', 'eat', 'cook'];

for (let count = 0; count < toDoList.length -1; count++) {
  console.log(`${count + 1}. ${toDoList[count]} `);
}

// 1. walk the dog
// 2. walk the cat
// 3. code
// 4. eat
// 5. cook
