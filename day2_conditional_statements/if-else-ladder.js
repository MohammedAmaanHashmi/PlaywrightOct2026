let marks_10 = 150;


if (marks_10 <= 0 || marks_10 > 100) {
    console.log("Please enter marks in 0-100 Range");
}
else {

    if (marks_10 > 90) {
        console.log("A+");
    }
    else if (marks_10 > 80) {
        console.log("A");
    }
    else if (marks_10 > 70) {
        console.log("B");
    }
    else if (marks_10 > 60) {
        console.log("C");
    }


    else {
        console.log("No Grades applied")
    }
}