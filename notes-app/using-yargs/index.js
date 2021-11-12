const yargs = require("yargs");
const { addNewNotes, removeNotes, listAllNotes, readNotes } = require("./notes");

yargs.command({
  command: "add",
  describe: "Adding a note",
  builder: {
    title: {
      describe: "Title of note",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Body of note",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    addNewNotes(argv.title, argv.body);
  },
});

yargs.command({
  command: "remove",
  describe: "Removing a note",
  builder: {
    title: {
      describe: "Remove note",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    removeNotes(argv.title);
  },
});

yargs.command({
  command: "list",
  describe: "Listing notes",
  handler: () => {
      listAllNotes();
  },
});

yargs.command({
  command: "read",
  describe: "Read a note",
  builder: {
    title: {
      describe: "Read note",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
   readNotes(argv.title);
  },
});

yargs.parse();
