let marks_10 = 85;
let marks_12 = 89;
let college_marks = 85;

if (marks_10 > 70) {

    if (marks_12 > 70) {

        if (college_marks > 70) {
            console.log("Eligible")
        }
        else {
            console.log("Sorry college marks is less - Not Eligble");
        }

    }

    else {
        console.log("Sorry 12th grade is less - Not Eligble");
    }

}
else {
    console.log("Sorry 10th grade is less - Not Eligble");
}
