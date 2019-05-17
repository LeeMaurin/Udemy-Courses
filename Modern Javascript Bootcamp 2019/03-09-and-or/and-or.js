// This is a stand-alone JavaScript file. It can be run in node.js. 
// At the terminal prompt, type: node and-or.js.  
// Note: you must be in the subdirectory where the JavaScript file is located. 

// This code catagorizes restaurant menus into three types:  vegan, vegan & meat and meat lovers.

let isGuest1Vegan = true;
let isGuest2Vegan = true;

if (isGuest1Vegan && isGuest2Vegan) {
  console.log('Here is our vegan menu');
} else if (isGuest1Vegan || isGuest2Vegan) {
  console.log('We have both meat and vegan items on the menu');
} else {
  console.log('Here is the meat lovers menu');
}
