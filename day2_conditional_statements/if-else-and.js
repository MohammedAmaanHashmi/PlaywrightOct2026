let marks_10 = 90;
let marks_12 = 95;
let college_marks = 85;

let eligible = marks_10 > 70 && marks_12 > 70 && college_marks > 70;

if (eligible) {
    console.log("Eligible");
}
else {
    console.log("Not Eligible");
}