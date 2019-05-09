// This is a stand-alone JavaScript file. It can be run in node.js.
// At the terminal prompt, type: node filename.js. 
// Note: you must be in the subdirectory where the JavaScript file is located.

let isValidPassword = function(pw) {
  return pw.length > 8 && !pw.includes('password');
};

console.log(isValidPassword('sdfsf'));  // returns false
console.log(isValidPassword('sdsflkdjfl'));  // returns false
console.log(isValidPassword('sdfsdpassword')); // returns true
