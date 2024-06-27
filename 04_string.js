var greet="Good Morning";
console.log(`${greet.length}`); //length
console.log(`${greet.charAt(3)}`);//charAt
console.log(`${greet.indexOf("n")}`);//indesOf
console.log(`${greet.concat("brother")}`);//concat
console.log(`${greet.toUpperCase()}`);//to upper case

var trim="  hello trim  "
console.log(`length before trim is ${trim.length}`);
var result=trim.trim();
console.log(`length after trim is ${result.length}`); //trim


console.log(`Is llo is available ${trim.includes("llo")}`);//this will show whether passed string available or not.

console.log(`========== split() ==============`);

var myName = "Gajanan Kharat";
var result = myName.split(" "); //to find total no of workds
var word="My life My rule"
var result=word.split(" ")
console.log(`after splite ${result.length}`);
