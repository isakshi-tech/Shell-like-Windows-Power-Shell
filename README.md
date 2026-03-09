/\*\*1.importing the readline module
const readline = require("readline");
readline module is built in node.js module
//it allows a program to read input from terminal
//t is commonly used to create interactive command-line applications.

//\*\*2.creating the interface to communicate with terminal
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
prompt() is a method that displays the prompt symbol.
It tells the program to wait for user input.

//.on listens the line event which is emitted after presssing the enter
rl.on("line", (command) => {
console.log(`${command}: command not found `);
});
rl.on() is used to listen for events from the readline interface.

User types → h e l l o
↓
stdin receives characters
↓
readline collects characters
↓
Enter pressed
↓
characters combined into string
↓
"line" event triggered
↓
callback receives command
