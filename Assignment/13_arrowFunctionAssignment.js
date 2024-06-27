console.log(`--------------------------Task01---------------------------------`);
let arrow = () => {
    console.log("Without any parameter and argument:- Today is Monday");
}
arrow();
console.log(`--------------------------Task02---------------------------------`);

let mulArrow = (n1, n2, n3 = 1) => {
    let result = n1 * n2 * n3
    console.log("Multiplication of three number", result);
}
mulArrow(5, 5, 2);
mulArrow(10, 4)
console.log(`--------------------------Task03---------------------------------`);

let addarrow = (n1, n2, n3, n4, n5) => {
    let result=n1+n2+n3+n4+n5;
    console.log(`Addition of passed paramters is `,result);
}
addarrow(100, 100, 200, 349, 756);
addarrow("I am", "Learning", "ES6", "Features", "indepth")