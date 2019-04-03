// let isValidPassword = function(pw) {
//   if (pw.length > 8 && !pw.includes('password')) {
//     return true;
//   } else {
//     return false;
//   }
// };

// console.log(isValidPassword('sdfsf'));
// console.log(isValidPassword('sdsflkdjfl'));
// console.log(isValidPassword('sdfsdpassword'));

// OR

let isValidPassword = function(pw) {
  return pw.length > 8 && !pw.includes('password');
};

console.log(isValidPassword('sdfsf'));
console.log(isValidPassword('sdsflkdjfl'));
console.log(isValidPassword('sdfsdpassword'));
