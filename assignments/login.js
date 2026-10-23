const correctUsername = "admin@email.com";
const correctPassword = "admin@123";

//Both incorrect
let enteredUsername = "Mohammed Amaan Hashmi";
let enteredPassword = "Amaan@2026";

if (enteredUsername === correctUsername && enteredPassword === correctPassword) {
  console.log("Login Sucessful");
} else {
  console.log("Invalid Credentails");
}

//Wrong username, Correct password
enteredUsername = "Mohammed Amaan Hashmi";
enteredPassword = "admin@123";

if (enteredUsername === correctUsername && enteredPassword === correctPassword) {
  console.log("Login Sucessful");
} else {
  console.log("Invalid Credentails");
}

//Correct username, Wrong password
enteredUsername = "admin@email.com";
enteredPassword = "Test@123";

if (enteredUsername === correctUsername && enteredPassword === correctPassword) {
  console.log("Login Sucessful");
} else {
  console.log("Invalid Credentails");
}

//Correct username, Correct password
enteredUsername = "admin@email.com";
enteredPassword = "admin@123";

if (enteredUsername === correctUsername && enteredPassword === correctPassword) {
  console.log("Login Sucessful");
} else {
  console.log("Invalid Credentails");
}
