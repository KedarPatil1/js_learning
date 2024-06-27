//Arithmetic operator +
var add=10+20;
console.log(`Result is ${add}`);

//function expression

var add=function(num1,num2,num3) {
    var result=num1+num2+num3
    console.log(`result of three no is ${result}`);
}
add(10,20,30,40);

//Arithmetic operator -

var sub=function(num1,num2){
    console.log(`sub of two no is ${num1-num2}`);
}
sub(20,10)

var sub=function(num1,num2){
    console.log(`sub of two no is ${num1-num2}`);
return num1,num2
}
var result=sub(55,54);
console.log(result);

//Arithmetic operator * and for power we used exponentiation operator 

var mul=10*5
console.log(`mul is ${mul}`);
var mul=2**8
console.log(`power is ${mul}`);

//Arithmetic operator /

var div=10/5
console.log(`div is ${div}`);
var div=2/8
console.log(`div is ${div}`);

//Arithmetic operator %

var mod=10%4
console.log(`remainder of mod is ${mod}`);

//increment/decrement operator
//prefix=++num first increase then assign
//postfix =num++ first assign then increase

var num1=12
num1=++num1
console.log(`prefix is ${num1}`);
var num2=10
num2=num2++
console.log(`postfix is ${num2}`);

