const yargs = require("yargs");
const { addNewNotes } = require("./notes");

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
      }
  },
  handler: (argv) => {
      addNewNotes(argv.title,
          argv.body
      );
   
  },
});

yargs.parse();