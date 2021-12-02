const createNote = require('./createNote');

const title = document.querySelector('#note-title');
const content = document.querySelector('#note-content');
const button = document.querySelector('#add-note-button');

button.addEventListener('click', () => {
  createNote(title.value, content.value);
});