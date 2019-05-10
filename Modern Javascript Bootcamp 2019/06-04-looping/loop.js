// This is a stand-alone JavaScript file. It can be run in node.js. 
// At the terminal prompt, type: node filename.js. 
// Note: you must be in the subdirectory where the JavaScript file is located.



let toDoList = ['walk the dog', 'walk the cat', 'code', 'eat', 'cook'];

// console.log(toDoList.splice(2, 1));
// console.log(toDoList);
// toDoList.push('workout');
// console.log(toDoList);
// toDoList.pop();
// console.log(toDoList);
// console.log(`You have ${toDoList.length} todos.`);

toDoList = toDoList.splice(0, 2);
toDoList.forEach(function(item, index) {
  console.log(`${index + 1}. ${item}.`);
});
