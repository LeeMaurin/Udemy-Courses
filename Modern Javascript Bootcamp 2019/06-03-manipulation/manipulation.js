let toDoList = ['walk the dog', 'walk the cat', 'code', 'eat', 'cook'];

console.log(toDoList.splice(2, 1));
console.log(toDoList);
toDoList.push('workout');
console.log(toDoList);
toDoList.pop();
console.log(toDoList);
console.log(`You have ${toDoList.length} todos.`);
