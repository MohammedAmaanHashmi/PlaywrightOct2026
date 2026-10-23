// ---------- 1. Test Tool Validation ----------
let arr = ["Selenium", "Playwright", "Cypress", "WebDriverIO"];
let requiredTool = "Playwright";
let toolFound = false;

for (let i = 0; i < arr.length; i++) {
  if (requiredTool == arr[i]) {
    toolFound = true;
    break;
  }
}

if (toolFound) {
  console.log("Playwright is supported");
} else {
  console.log("Playwright not found in supported tools");
}

// ---------- 2. Check API Tags ----------
//Senario 1
let apiTestTags = "regression,smoke,api,sanity";
let testingType = "smoke";
let temp = false;

let arr1 = apiTestTags.split(",");
for (let i = 0; i < arr1.length; i++) {
  if (testingType == arr1[i]) {
    temp = true;
    break;
  }
}

if (temp) {
  console.log("Smoke test will be executed");
}

//Senario 2
testingType = "performance";
temp = false;

for (let i = 0; i < arr1.length; i++) {
  if (testingType == arr1[i]) {
    temp = true;
    break;
  }
}

if (temp) {
  console.log("Performance tests found");
}

//---------- 3. Validate Email Format ----------
//Scenario 1
let email = "mukesh@test.com";
if (email.includes("@") && email.endsWith(".com")) {
  console.log("Email is valid");
} else {
  console.log("Invalid email format");
}

//Scenario 2
email = "test.com";
if (email.includes("@") && email.endsWith(".com")) {
  console.log("Email is valid");
} else {
  console.log("Invalid email format");
}

//Scenario 3
email = "test@com";
if (email.includes("@") && email.endsWith(".com")) {
  console.log("Email is valid");
} else {
  console.log("Invalid email format");
}
