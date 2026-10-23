let responseCode = 200;

if (responseCode === 200) {
  console.log("Test Passed");
} else if (responseCode === 404) {
  console.log("Page Not Found");
} else if (responseCode === 500) {
  console.log("Server Error");
} else {
  console.log("Unknown Status");
}

responseCode = 404;
if (responseCode === 200) {
  console.log("Test Passed");
} else if (responseCode === 404) {
  console.log("Page Not Found");
} else if (responseCode === 500) {
  console.log("Server Error");
} else {
  console.log("Unknown Status");
}

responseCode = 500;
if (responseCode === 200) {
  console.log("Test Passed");
} else if (responseCode === 404) {
  console.log("Page Not Found");
} else if (responseCode === 500) {
  console.log("Server Error");
} else {
  console.log("Unknown Status");
}

responseCode = 401;
if (responseCode === 200) {
  console.log("Test Passed");
} else if (responseCode === 404) {
  console.log("Page Not Found");
} else if (responseCode === 500) {
  console.log("Server Error");
} else {
  console.log("Unknown Status");
}

responseCode = 302;
if (responseCode === 200) {
  console.log("Test Passed");
} else if (responseCode === 404) {
  console.log("Page Not Found");
} else if (responseCode === 500) {
  console.log("Server Error");
} else {
  console.log("Unknown Status");
}
