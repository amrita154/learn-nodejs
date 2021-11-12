//taking input from command line
// console.log(process.argv);

const yargs = require("yargs");

//can use yargs for command line interaction

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
    console.log("Adding a note",argv.title,argv.body);
  },
});

yargs.command({
  command: "read",
  describe: "Reading a note",
  handler: () => {
    console.log("Reading a note");
  },
});

yargs.command({
  command: "list",
  describe: "Listing a note",
  handler: () => {
    console.log("Listing a note");
  },
});

yargs.parse();
