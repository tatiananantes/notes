const displayNotes = (notes) => {
display_notes.innerHTML = "";
notes.forEach((note) => {
  display_notes.insertAdjacentHTML('afterbegin', `
  <a href="#" id="">
    <p><strong>${note.title}</strong> - <span>${note.content.substring(0, 20)}</span></p>
  </a>`
  );
  // document.write(`${note}<br>`);
});
};

module.exports = displayNotes;