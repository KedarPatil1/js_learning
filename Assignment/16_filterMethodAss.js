const arrayElement=[20,11,40,25,23,11,90,31,60,2,19];

var result=arrayElement.filter((element)=>{
    return element>=50
})
console.log("Number greater than 50",result);


var result=arrayElement.filter((element)=>{
    return element % 2 ==0
})
console.log("Even Number in array",result);

var result=arrayElement.filter((element)=>{
    return element % 2 ==1
})
console.log("Odd Number in array",result);


var result=arrayElement.filter((element)=>{
    return element % 5 ==0
})
console.log("Number multiple of 5",result);

var result=arrayElement.filter((element)=>{
    return element>=20 && element<=50
})
console.log("Number between 20 and 50 in array are ",result);