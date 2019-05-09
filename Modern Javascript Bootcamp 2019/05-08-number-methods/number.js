// This is a stand-alone JavaScript file. It can be run in node.js.
// At the terminal prompt, type: node filename.js.
// Note: you must be in the subdirectory where the JavaScript file is located.



let makeGuess = function(guess) {
  let min = 1;
  let max = 10;
  let letRandom = Math.floor(Math.random() * (max - min + 1)) + min;
  return guess === letRandom;
};

console.log(makeGuess(1));
