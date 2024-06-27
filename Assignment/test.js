// var STEP1;
// console.log("===== STEP 1.1 =====");

// function squreOfWordLength(JavaScript) {
//     var l1 = JavaScript.length;
//     console.log(`The Length Of ${JavaScript} is: ${l1}`);
//     var result = l1 * l1;
//     console.log(`The Squre Of ${JavaScript}  is: ${result}`);
//     return result;
// }
// var result = squreOfWordLength("JavaScript");
// var result = squreOfWordLength("GoogleChrome");
// var result = squreOfWordLength("DeveloperSmart");


console.log("===== STEP 3 =====");
var wordLength = function wordLength(argOne) { 
  
    var result = argOne.length % 2 == 0 ? "even number" : "odd number ";
    console.log(`The string is ${argOne} and length of string is ${argOne.length} which is ${result}`);
    return result;
}
var returnValue = wordLength("JavaScript");
var returnValue = wordLength("GoogleChrome");
var returnValue = wordLength("Developer Smart");

