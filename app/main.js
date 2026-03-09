const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "$ ",
});
rl.prompt();

rl.on("line", (command) => {
  if (command === "exit") {
    rl.close();
    return;
  } else if (command.startsWith("echo")) {
    const message = command.slice(5);
    console.log(message);
    rl.prompt();
    return;
  } else {
    console.log(`${command}: command not found `);
    rl.prompt();
  }
});

rl.on("close", () => {
  console.log("exit");
  process.exit(0); //tells node js to stop program immediately
});
