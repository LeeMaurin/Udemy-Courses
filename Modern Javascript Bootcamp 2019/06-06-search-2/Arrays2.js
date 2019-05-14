This is a stand-alone JavaScript file. It can be run in node.js. 
At the terminal prompt, type: node filename.js. Note: you must be in the subdirectory where the JavaScript file is located.



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

const findNote = function(notes, noteTitle) {};

const note = findNote(notes, 'trip number three');
console.log(note);

const index = notes.findIndex(function(note, index) {
  return note.body === 'Somewhere in Oz';
});
console.log(index);
