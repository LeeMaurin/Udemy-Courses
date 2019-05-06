// This is a stand-alone JavaScript file. It can be run in node.js.
// At the terminal prompt, type: node advanced-if.js. 
// Note: you must be in the subdirectory where the JavaScript file is located.

// This code divides a input temperature into three catagories:  too cold, too hot or pretty nice.

let temp = 20;

if (temp <= 32) {
  console.log('It is too cold outside!');
} else if (temp >= 110) {
  console.log('It is too hot outside!');
} else {
  console.log('It is pretty nice outside!');
}
