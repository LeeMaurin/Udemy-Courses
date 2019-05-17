// This is a stand-alone JavaScript file. It can be run in node.js. 
// At the terminal prompt, type: node string-method.js.  
// Note: you must be in the subdirectory where the JavaScript file is located. 

// The isValidPassword functions tests if a password has at least
// 8 charaters and does not include the word "password" 

let isValidPassword = function(pw) {
  return pw.length > 8 && !pw.includes('password');
};

console.log(isValidPassword('sdfsf'));  // returns false
console.log(isValidPassword('sdsflkdjfl'));  // returns true
console.log(isValidPassword('sdfsdpassword')); // returns false
