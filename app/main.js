//**1.importing the readline module
const readline = require("readline");
//readline module is build in node.js module
//it allows a program to read input from terminal
//**2.creating the interface to communicate with terminal
const rl = readline.createInterface({
  input: process.stdin,
  //standard input:the program reads what the user types.
  output: process.stdout,
  //standard output:the program prints output to the terminal.
  prompt: "$ ",
  //symbol which will get displayed before typing text
});

//this will prompt the symbol
rl.prompt();
// prompt and prompt() are different
//option  and method build in nodejs

//.on listens the line event which is emitted after presssing the enter
rl.on("line", (command) => {
  console.log(`${command}: command not found `);
});
