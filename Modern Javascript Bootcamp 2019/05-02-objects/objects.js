// This is a stand-alone JavaScript file. It can be run in node.js.
// At the terminal prompt, type: node filename.js.
// Note: you must be in the subdirectory where the JavaScript file is located.


let person = {
  name: 'Lee',
  age: 45,
  location: 'Austin'
};
console.log(
  `${person.name} is ${person.age} years old and lives in ${person.location}. `
);

person.age = person.age + 1;

console.log(
  `${person.name} is ${person.age} years old and lives in ${person.location}. `
);
