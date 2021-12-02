const getNotes = () => {
  fetch("http://localhost:3000/notes")
  .then((response) => { response.json()
  .then((notes) => {
      notes.forEach(note => {
        const notesDisplayDiv = document.querySelector('#display_notes');  
        const titleElement = document.createElement('p');
        const contentElement = document.createElement('p');
        titleElement.innerText = note.title;
        contentElement.innerText = note.content;
        notesDisplayDiv.append(titleElement);
        notesDisplayDiv.append(contentElement);
    });
  });
});
};

module.exports = getNotes;
 