const { inputUtils, fileSystemUtils } = require("./utils");

const editFile = (id) => {
  inputUtils.askQuestion("Add your data and press enter\n", (answer) => {
    fileSystemUtils.writeFile(
      "./assets/notes/" + id + ".txt",
      answer,
      (err, writeNotesData) => {
        if (err) {
          console.log("error in saving notes", err);
          inputUtils.closeReadline();
        } else {
          console.log("notes with id " + id + " saved");
          inputUtils.closeReadline();
        }
      }
    );
  });
};

const deleteFile = (id) => {
  fileSystemUtils.deleteFile(
    "./assets/notes/" + id + ".txt",
    (err, deleteSuccess) => {
      if (err) {
        console.log("unable to delete file" + err);
          inputUtils.closeReadline();
      }
      else {
          inputUtils.closeReadline();
      }
    }
  );
};

const searchFile = (id, option) => {
  fileSystemUtils.readFile(
    "./assets/notes/" + id + ".txt",
    (err, readFileData) => {
      if (err) {
        console.log("notes with id " + id + " is not present");
        inputUtils.closeReadline();
      } else {
        console.log("notes with id " + id + ":\n" + readFileData);
        if (option === "2") {
          inputUtils.closeReadline();
        }
        if (option === "3") {
          editFile(id);
        }
        if (option === "4") {
          deleteFile(id);
        }
      }
    }
  );
};

const getNotesIdFomUser = (option) => {
  inputUtils.askQuestion("Enter notes id\n", (id) => {
    console.log("selected notes id is " + id);
    searchFile(id, option);
  });
};

const createNewNotes = () => {
  fileSystemUtils.readFile("./assets/notesid.txt", (err, id) => {
    if (err) {
      console.log("notes id cannot be read");
      inputUtils.closeReadline();
    } else {
      fileSystemUtils.createFile(
        "./assets/notes/" + id + ".txt",
        (err, createFiledata) => {
          if (err) {
            console.log("error in creating notes" + err);
            inputUtils.closeReadline();
          } else {
            fileSystemUtils.writeFile(
              "./assets/notesid.txt",
              parseInt(id) + 1 + "",
              (err, writeIdData) => {
                if (err) {
                  console.log("error in creating file", err);
                } else {
                  console.log("notes with id " + id + " is created.");
                  editFile(id);
                }
              }
            );
          }
        }
      );
    }
  });
};

const switchOperations = (option) => {
  console.log("selected option is " + option);
  if (option === "2" || option === "3" || option === "4") {
    getNotesIdFomUser(option);
  }
  if (option === "1") {
    createNewNotes();
  }
};

inputUtils.askQuestion("Welcome\nPlease tell your name\n", (name) => {
  console.log("Hi " + name);
  inputUtils.askQuestion(
    "Choose one of the options\n1.Create a new note\n2.Search a note\n3.Edit a note\n4.Delete a note\n",
    (option) => {
      switchOperations(option);
    }
  );
});
