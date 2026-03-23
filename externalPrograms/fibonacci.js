const n = Number(process.argv[2]);

let a = 0,
  b = 1;
console.log("First " + n + " Fibonacci numbers:");
for (let i = 0; i < n; i++) {
  console.log(a);
  const temp = a + b;
  a = b;
  b = temp;
}
