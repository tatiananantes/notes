(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // createNote.js
  var require_createNote = __commonJS({
    "createNote.js"(exports, module) {
      var createNote2 = (title, content) => {
        fetch("http://localhost:3000/notes", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ "title": `${title}`, "content": `${content}` })
        }).then((response) => response.json()).then((data) => {
          console.log("Success:", data);
        }).catch((error) => {
          console.error("Error:", error);
        });
      };
      module.exports = createNote2;
    }
  });

  // getNotes.js
  var require_getNotes = __commonJS({
    "getNotes.js"(exports, module) {
      var getNotes2 = () => {
        fetch("http://localhost:3000/notes").then((response) => {
          response.json().then((notes) => {
            notes.forEach((note) => {
              const notesDisplayDiv = document.querySelector("#display_notes");
              const titleElement = document.createElement("p");
              const contentElement = document.createElement("p");
              titleElement.innerText = note.title;
              contentElement.innerText = note.content;
              notesDisplayDiv.append(titleElement);
              notesDisplayDiv.append(contentElement);
            });
          });
        });
      };
      module.exports = getNotes2;
    }
  });

  // displayNotes.js
  var require_displayNotes = __commonJS({
    "displayNotes.js"(exports, module) {
      var displayNotes2 = (notes) => {
        display_notes.innerHTML = "";
        notes.forEach((note) => {
          display_notes.insertAdjacentHTML("afterbegin", `
  <a href="#" id="">
    <p><strong>${note.title}</strong> - <span>${note.content.substring(0, 20)}</span></p>
  </a>`);
        });
      };
      module.exports = displayNotes2;
    }
  });

  // index.js
  var createNote = require_createNote();
  var getNotes = require_getNotes();
  var displayNotes = require_displayNotes();
  var titleEl = document.querySelector("#note-title");
  var contentEl = document.querySelector("#note-content");
  var buttonEl = document.querySelector("#add-note-button");
  buttonEl.addEventListener("click", () => {
    createNote(titleEl.value, contentEl.value);
  });
  getNotes();
})();
