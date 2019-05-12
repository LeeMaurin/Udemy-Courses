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
