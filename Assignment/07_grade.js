function gradeCalculation(marks) {

    Number(marks)
    if (marks < 0 || marks > 100 && marks == null || marks == undefined || marks==parseInt("string",10) ) {
        console.log(`Your mark is ${marks} which is invalid`);
     
    }
    
    else {
        Number(marks)
    
        if (marks > 90) {
            console.log(`Your mark is ${marks} which has grade A+`);
        }
        if (marks >= 75 && marks <= 90) {
            console.log(`Your mark is ${marks} which has grade A`);
        }
        if (marks >= 50 && marks <= 75) {
            console.log(`Your mark is ${marks} which has grade B`);
        }
        if (marks >= 35 && marks <= 50) {
            console.log(`Your mark is ${marks} which has grade C`);
        }
        if (marks < 35) {
            console.log(`Your mark is ${marks} you are failed`);
        }
    }
}
gradeCalculation(91);
gradeCalculation(80);
gradeCalculation(70);
gradeCalculation(50);
gradeCalculation(35);
gradeCalculation(30);
gradeCalculation(-55);
gradeCalculation(0);
gradeCalculation("91");
gradeCalculation("Eighty");
gradeCalculation(undefined);
gradeCalculation(null);


for (x=0;x>=10;x++) {
    console.log(x);    
}
