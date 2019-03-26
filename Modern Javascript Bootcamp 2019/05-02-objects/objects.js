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
