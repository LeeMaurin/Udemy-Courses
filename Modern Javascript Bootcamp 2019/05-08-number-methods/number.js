let makeGuess = function(guess) {
  let min = 1;
  let max = 10;
  let letRandom = Math.floor(Math.random() * (max - min + 1)) + min;
  return guess === letRandom;
};

console.log(makeGuess(1));
