const fs = require("fs");

const addNewNotes = (title, body) => {
    const notes = loadNotes();
    if (searchNotes(notes, title).length===0) {
              notes.push({ title, body });
        saveNotes(notes);
        console.log("new note added");
    }
    else {
         console.log("note title already taken");
    }
 
 
};

const searchNotes = (notes, title) => {
    const duplicateNotes = notes.filter((note) => {
        return note.title === title;
    });
    return duplicateNotes||[];
}

const removeNotes = (title) => {
    const notes = loadNotes();
    const searchedNotes = searchNotes(notes, title);
    if (searchedNotes.length!==0) {
        
    }
    else {
        console.log("note not found");
    }
}

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
  } catch (e) {
    console.log("Error saving notes");
  }
};

module.exports = {
  addNewNotes,
};
