// This is a stand-alone JavaScript file. It can be run in node.js.
// At the terminal prompt, type: node temp-string.js. 
// Note: you must be in the subdirectory where the JavaScript file is located.

This code utilizes a function to generate a statement.

let tip = function(total, tip = 0.2) {
  let totalWithTip = total + total * tip;
  console.log(`A ${tip * 100}% tip on $${total} would be $${total * tip}`);
};

tip(20);
tip(30, 0.1);
