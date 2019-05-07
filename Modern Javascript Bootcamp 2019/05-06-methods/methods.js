// This is a stand-alone JavaScript file. It can be run in node.js.
// At the terminal prompt, type: node filename.js.
// Note: you must be in the subdirectory where the JavaScript file is located.

// This code generates output by utilizing a method statement embedded inside an object.

let restaurant = {
  name: 'abc',
  guestCapacity: 75,
  guestCount: 0,
  checkAvailability: function() {
    let seatsLeft = this.guestCapacity - this.guestCount;
  }
};
console.log(seatsLeft);
