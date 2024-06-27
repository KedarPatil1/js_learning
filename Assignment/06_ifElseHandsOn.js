console.log(`-------------Task 01---------------`);
var evenorOdd = function isEvenOrOdd(num1) {
    if (num1 % 2 == 0) {
        console.log(`Entered number is ${num1} which is even number`);
    }
    else {
        console.log(`Entered number is ${num1} which is odd number`);
    }
}
evenorOdd(45);
evenorOdd(44);
evenorOdd(70);

console.log(`-------------Task 02---------------`);

var voteEligilibility = function isvoteEligilibilityOrNot(age) {
    if (age >= 21) {
        console.log(`Your age is ${age} and you are eligible to cast the vote`);
    } else {
        console.log(`Your age is ${age} and you are  not eligible to cast the vote`);
    }
}

voteEligilibility(17);
voteEligilibility(22);

console.log(`-------------Task 03---------------`);

var word = function isstringcontainchar(letter) {
    if (letter.length >= 10) {
        console.log(`The string contains more than 10 char`);
    }
    else {
        console.log(`The string does not contains more than 10 char`);
    }
}
word("JavaScript")

console.log(`-------------Task 04---------------`);

var word =function stringStartWithOrNot(word){
    if(word.startsWith("Java")){
        console.log(`The string ${word} start with passed parameter`);
    }
    else{
        console.log(`The string ${word} does not start with passed parameter`);
    }
}
word("JavaScript Language");
word("Programming word");