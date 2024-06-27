
console.log("---------------------Assignment 01---------------------");
const fruit_seasonal=["Banana","Orange","Apple","Mango","WaterMelon"]
console.log(`01 The list of seasonal fruits as ${fruit_seasonal}`);
console.log(`02 The first element in fruit list is ${fruit_seasonal[0]} and last fruit in list is ${fruit_seasonal[fruit_seasonal.length-1]}`);
fruit_seasonal.push("Pinapple");
console.log(`03 After adding extra fruit in array new array is ${fruit_seasonal}`);

//block scope element eg.

console.log("---------------------Assignment 02---------------------");
var x=0
if(x=0){
    const y=1
}
console.log(y);