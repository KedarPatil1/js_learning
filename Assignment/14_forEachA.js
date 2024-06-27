console.log(`--------------------------Task01---------------------------------`);

const arrayNumbers1 = [1, -7, 40, 502, -77, 91];
arrayNumbers1.forEach((currentValue, index, arrayNumbers1) => {
    console.log(currentValue, index, arrayNumbers1);
})
const arrayNumbers=[1,-7,40,502,-77,91,0,108,89,-601];
console.log(`--------------------------Task02---------------------------------`);

arrayNumbers.forEach((n1) => {
    if (n1 > 0) {
        console.log(`Positive number are ${n1}`);
    }

})
console.log(`--------------------------Task03---------------------------------`);
arrayNumbers.forEach((n1) => {
    if (n1 < 0) {
        var n2=[n1]
        console.log("Negative numbers from array ",n2);
    }
})
console.log(`--------------------------Task04---------------------------------`);

arrayNumbers.forEach((n1)=>{
    if (n1%2==0){
        console.log("Even number from array are",n1);
        
    }
})

console.log(`--------------------------Task05---------------------------------`);
var a=0
arrayNumbers.forEach((element)=>{
a=a+element

})
console.log("Sum of array elements",a);


