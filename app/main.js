const readline = require("readline");
const fs = require("fs");
const path = require("path");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "$ ",
});
rl.prompt();

rl.on("line", (command) => {
  const trimmed = command.trim();

  if (trimmed.startsWith("type ")) {
    const arg = trimmed.slice(5);
    const builtins = ["echo", "exit", "type"];
    let found = false;
    if (builtins.includes(arg)) {
      console.log(`${arg} is a shell builtin`);
      found = true;
      rl.prompt();
      return;
    } else {
      //logic for path
      //1.read the path variable
      const pathEnv = process.env.PATH; //nodes gives this automatically
      const dirs = pathEnv.split(require("path").delimiter);
      const exts = ["", ".exe", ".cmd", ".bat"];
      for (const dir of dirs) {
        for (const ext of exts) {
          const fullPath = path.join(dir, arg + ext);

          try {
            fs.accessSync(fullPath, fs.constants.X_OK);
            console.log(`${arg} is ${fullPath}`);
            found = true;
            break;
          } catch {}
        }
        if (found) break;
      }

      if (!found) {
        console.log(`${arg}: not found`);
      }

      rl.prompt();
      return;
    }
  } else if (trimmed === "exit") {
    rl.close();
    return;
  } else if (trimmed.startsWith("echo ")) {
    const message = trimmed.slice(5);
    console.log(message);

    rl.prompt();
    return;
  } else {
    console.log(`${trimmed}: command not found`);
    rl.prompt();
  }
});

rl.on("close", () => {
  console.log("exit");
  process.exit(0); //tells node js to stop program immediately
});
