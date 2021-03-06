// This is a stand-alone JavaScript file. It can be run in node.js. 
// At the terminal prompt, type: node Arrays2.js. 
// Note: you must be in the subdirectory where the JavaScript file is located.



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

const findNote = function (notes, noteTitle) {
    return notes.find(function (note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
}

const note = findNote(notes, 'trip number three');
console.log(note);

// const index = notes.findIndex(function(note, index) {
//   return note.body === 'Somewhere in Oz';
// });
// console.log(index);
