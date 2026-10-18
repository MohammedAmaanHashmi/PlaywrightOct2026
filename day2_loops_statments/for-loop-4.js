let num1 = 150;
let found = false;

console.log("Start");

for (let i = 0; i < 200; i++) {
  if (num1 == i) {
    found = true;
    break;
  }
}

if (found) {
  console.log(num1 + ": found");
} else {
  console.log(num1 + ": not found");
}

console.log("End");
