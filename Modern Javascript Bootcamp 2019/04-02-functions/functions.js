// This is a stand-alone JavaScript file. It can be run in node.js. 
// At the terminal prompt, type: node functions.js.  
// Note: you must be in the subdirectory where the JavaScript file is located. 

// This code utilizes a function to convert a farenheit temperature into celcius.

let convert = function(temp) {
  let celcius = (temp - 32) * (5 / 9);
  return celcius;
};

let temp1 = convert(32);
let temp2 = convert(212);

console.log(temp1 + ' degrees celsius');
console.log(temp2 + ' degrees celsius');
