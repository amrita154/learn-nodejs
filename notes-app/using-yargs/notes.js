const fs = require("fs");

const addNewNotes = (title, body) => {
  const notes = loadNotes();
  const searchNotes = notes.filter((note) => {
    return note.title === title;
  });
  if (searchNotes.length === 0) {
    notes.push({ title, body });
    const err = saveNotes(notes);
    if (err) {
      console.log("error in creating  new note");
    } else {
      console.log("new note added");
    }
  } else {
    console.log("note title already taken");
  }
};

const removeNotes = (title) => {
  const notes = loadNotes();
  const filteredNotes = notes.filter((note) => {
    return note.title !== title;
  });

  if (filteredNotes.length !== notes.length) {
    const err = saveNotes(filteredNotes);
    if (err) {
      console.log("error in saving notes");
    } else {
      console.log("note removed successfully");
    }
  } else {
    console.log("note not found");
  }
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    return JSON.parse(dataBuffer.toString());
  } catch (e) {
    return [];
  }
};

const saveNotes = (notes) => {
  try {
    fs.writeFileSync("notes.json", JSON.stringify(notes));
    return undefined;
  } catch (e) {
    return e;
  }
};

const listAllNotes = () => {
  console.log(JSON.stringify(loadNotes()));
};

const readNotes = (title) => {
  const notes = loadNotes();
  const searchNotes = notes.filter((note) => {
    return note.title === title;
  });
  console.log(searchNotes);
};

module.exports = {
  addNewNotes,
  removeNotes,
  listAllNotes,
  readNotes,
};
