console.log("--1--");
function show1(params) {
    console.log("This is function one");
}
show1();
function show2(params) {
    console.log("This is function second");
}
show2();

console.log("--2--");
function personalDetails(firstName,lastName,collageName) {
    console.log("My personal details as mentioned first name is",firstName,"last name is",lastName,"and collage name is",collageName);
}
personalDetails("Kedar","Patil","SIEM Nashik")

console.log("--3--");

function addThreeValues(num1,num2,num3) {
   // console.log("Your entered numbers are ",num1,num2,num3);
    console.log("Addition of passed argument is",num1+num2+num3);
    //console.log("String message of passed argument is",num1,num2,num3);
}

addThreeValues(10.23,600,40)
addThreeValues("Hello","Good","Night")