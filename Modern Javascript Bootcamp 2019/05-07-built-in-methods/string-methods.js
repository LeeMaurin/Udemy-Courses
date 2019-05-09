

let isValidPassword = function(pw) {
  return pw.length > 8 && !pw.includes('password');
};

console.log(isValidPassword('sdfsf'));  // returns false
console.log(isValidPassword('sdsflkdjfl'));  // returns false
console.log(isValidPassword('sdfsdpassword')); // returns true
