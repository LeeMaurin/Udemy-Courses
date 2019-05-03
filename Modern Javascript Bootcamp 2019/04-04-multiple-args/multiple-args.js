// This is a stand-alone JavaScript file. It can be run in node.js.
// At the terminal prompt, type: node multiple-args.js. 
// Note: you must be in the subdirectory where the JavaScript file is located.

let tip = function(total, tip = 0.2) {
  let totalWithTip = total + total * tip;
  console.log('Your total with tip is: $' + totalWithTip);
};

tip(20);
tip(30, 0.1);
