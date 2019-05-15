// This is a stand-alone JavaScript file. It can be run in node.js. 
// At the terminal prompt, type: node filterNotes.js. 
// Note: you must be in the subdirectory where the JavaScript file is located.


// These functions return a query result based on a filter method.

const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habbits to work on',
    body: 'Exercise. Eating a bit better.'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}]

const findNote = function (notes, noteTitle) {
    return notes.find(function (note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
}

const findNotes = function (notes, query) {
    return notes.filter(function (note, index) {
        const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
        const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
        return isTitleMatch || isBodyMatch
    })
}

console.log(findNotes(notes, 'eating'))  // returns [ { title: 'Habbits to work on',
                                         //             body: 'Exercise. Eating a bit better.' } ]

const note = findNote(notes, 'some other office modification')
console.log(note)  // returns 'undefined' because there is no match
