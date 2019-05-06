// This is a stand-alone JavaScript file. It can be run in node.js.
// At the terminal prompt, type: node convert.js. 
// Note: you must be in the subdirectory where the JavaScript file is located.

// This code converts 32 degrees in farenheit to it's celsius and kelvin equilavent.

let farenheit = 32;
let celsius = (farenheit - 32) * (5 / 9);
let kelvin = (farenheit + 459.67) * (5 / 9);
console.log('celsius: ' + celsius);
console.log('kelvin: ' + kelvin);
