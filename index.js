const createNote = require('./createNote');
const getNotes = require('./getNotes');
const displayNotes = require('./displayNotes');


const titleEl = document.querySelector('#note-title');
const contentEl = document.querySelector('#note-content');
const buttonEl = document.querySelector('#add-note-button');


buttonEl.addEventListener('click', () => {
  createNote(titleEl.value, contentEl.value);
});


  getNotes();
