// let array=[10,20,30,40,50];
// array.forEach((Element)=>{
//     console.log(Element);
// })

let array=[10,20,30,40,50,51];
array.forEach((currentValue,index,array)=>{
    console.log(currentValue,index,array);
})


//sum the array element 
var a=0
array.forEach((element)=>{
 a=a+element

})
console.log("sum of element in array is",a);

//even number in array

array.forEach((element)=>{
if(element%2==0){
    console.log("Even number",element);
}
else{
    console.log("odd number",element);
}
})

//multiple of 3

array.forEach((element)=>{
    if(element%3==0){
        console.log("Number of multiple of three",element);
    }
})