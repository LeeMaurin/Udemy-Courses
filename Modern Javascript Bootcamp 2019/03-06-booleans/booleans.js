// This is a stand-alone JavaScript file. It can be run in node.js.
// At the terminal prompt, type: node booleans.js. 
// Note: you must be in the subdirectory where the JavaScript file is located.

let age = 3;

if (age <= 7) {
  console.log('You qualify for a child discount!');
}

if (age >= 65) {
  console.log('You qualify for a senior discount!');
}

if (age > 7 && age < 65) {
  console.log('You do not get a discount.');
}
// let childDiscount = age <= 7;
// let seniorDiscount = age >= 65;
// console.log('Child Discount = ' + childDiscount);
// console.log('Senior Discount = ' + seniorDiscount);
