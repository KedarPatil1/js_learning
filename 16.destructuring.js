let student={
    "name":"kedar",
    "city":"jalna",
    "pin":431204,
}
//object destructuring means not need to print each variable 
var {name,city,pin}=student
console.log(name,city,pin);

//object destructuring with default value 
var {name,city,pin,state="MH"}=student
console.log(name,city,pin,state);


//array destructuting 

var arrayOne=[10,20,30,40];
var [n0,n1,n2,n3,n4=0]=arrayOne
console.log(arrayOne,n4);