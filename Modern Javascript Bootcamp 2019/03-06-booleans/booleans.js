// This is a stand-alone JavaScript file. It can be run in node.js.
// At the terminal prompt, type: node booleans.js. 
// Note: you must be in the subdirectory where the JavaScript file is located.

// This code divides an age into 1 of 3 catagories: child discount, senior discount or no discount.

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

