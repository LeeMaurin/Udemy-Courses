// This is a stand-alone JavaScript file. It can be run in node.js. 
// At the terminal prompt, type: node number.js.
// Note: you must be in the subdirectory where the JavaScript file is located.

// makeGuess compares a known number from 1 to 10 to a randomly generated number from 1 to 10.
// If the numbers match, then the function returns true.

let makeGuess = function(guess) {
  let min = 1;
  let max = 10;
  let letRandom = Math.floor(Math.random() * (max - min + 1)) + min;
  return guess === letRandom;
};

console.log(makeGuess(1));
