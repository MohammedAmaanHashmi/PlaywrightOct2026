let arr = [25, 35, 45, 55, 78];

let number = 100;

let found = false;

for (i = 0; i < arr.length; i++) {
  let data = arr[i];
  if (number == data) {
    found = true;
    break;
  }
}

if (found == true) {
  console.log("Number Found");
} else {
  console.log("Not Found");
}
