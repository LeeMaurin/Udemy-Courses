// This is a stand-alone JavaScript file. It can be run in node.js. 
// At the terminal prompt, type: node filename.js. 
// Note: you must be in the subdirectory where the JavaScript file is located.

// This code returns the index location of "Somewhere in Oz" in the array of objects.

const notes = [
  {
    title: 'my next trip',
    body: 'Somewhere in Oz'
  },
  {
    title: 'trip number two',
    body: 'Somewhere in never never land'
  },
  {
    title: 'trip number three',
    body: 'Somewhere over there'
  }
];

const index = notes.findIndex(function(note, index) {
  return note.body === 'Somewhere in Oz';
});


console.log(index);

// Returns an index of 0
