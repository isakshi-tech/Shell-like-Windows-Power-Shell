const args = process.argv.slice(2);
const a = Number(args[0]);
const b = Number(args[1]);

if (b === 0) {
  console.log("Cannot divide by zero");
} else {
  console.log("Result", a / b);
}
