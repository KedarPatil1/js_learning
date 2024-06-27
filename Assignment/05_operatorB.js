console.log(`----Assignment 01 -----`)
console.log(`----Task 01-----`);
function greaterNumber(numone,numtwo){
    var result=numone>=numtwo ? numone :numtwo;
console.log(`The greater number between ${numone} and ${numtwo} is ${result}`);
}
greaterNumber(10,-10)
greaterNumber(800,899)


//--------------------------------------------------

console.log(`----Task 02-----`);
function isEvenOrOdd(num1){

    console.log(`The passed number is ${num1} which is ${result=num1 % 2==0 ? "Even number" :"Odd number"}`);
}

isEvenOrOdd(29);
isEvenOrOdd(44);
isEvenOrOdd(0);
isEvenOrOdd(101);

//--------------------------------------------------

console.log(`----Task 03-----`)

function wordLength(word1){
console.log(`The passes word is ${word1} whose length is ${word1.length} which is ${word1.length % 2 == 0 ? "Even Number": "Odd Number"}`);
}
wordLength("JavaScript")
wordLength("GoogleChrome")
wordLength("Developer are Smart")

//--------------------------------------------------
console.log(`----Assignment 02 -----`)

console.log(`----Task 01-----`)

function maleMarriageEligibility(gender,age,boynName){
console.log(`The age of ${boynName} is ${age} you are ${age >= 22 ? "Eligible" : "Not eligible"} for marriage`);
}

maleMarriageEligibility("Male",22,"Bill Gates")
maleMarriageEligibility("Male",20,"Steve Job")


console.log(`----Task 02-----`)

function femaleMarriageEligibility(gender,age,femaleName){
    console.log(`The age of ${boynName} is ${age} you are ${age <= 18 ? "Eligible" : "Not eligible"} for marriage`);
    }
    
    maleMarriageEligibility("Female",16,"Jenifer")
    maleMarriageEligibility("Female",27,"Malinda Gates")
    