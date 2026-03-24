const readline = require("readline");
const fs = require("fs");
const path = require("path");
const { spawnSync } = require("child_process");

function findInPath(cmd) {
  const dirs = process.env.PATH.split(path.delimiter);
  const exts = ["", ".exe", ".cmd", ".bat"];

  for (const dir of dirs) {
    for (const ext of exts) {
      const fullPath = path.join(dir, cmd + ext);
      try {
        fs.accessSync(fullPath, fs.constants.X_OK);
        return fullPath;
      } catch {}
    }
  }
  return null;
}

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

    if (builtins.includes(arg)) {
      console.log(`${arg} is a shell builtin`);
    } else {
      const found = findInPath(arg); 
      if (found) {
        console.log(`${arg} is ${found}`);
      } else {
        console.log(`${arg}: not found`);
      }
    }
  } else if (trimmed === "exit") {
    rl.close();
    return;
  } else if (trimmed.startsWith("echo ")) {
    const message = trimmed.slice(5);
    console.log(message);
  } else {
    const parts = trimmed.split(" ");
    const cmd = parts[0];
    const args = parts.slice(1);

    const found = findInPath(cmd); 
    if (!found) {
      console.log(`${cmd}: command not found`);
    } else {
      spawnSync(found, args, { stdio: "inherit" });
    }
  }

  rl.prompt();
});

rl.on("close", () => {
  console.log("exit");
  process.exit(0);
});
