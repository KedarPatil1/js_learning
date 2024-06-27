const friendList=["virat",10,"rishab","viru"]
const friendList1=[55,10,"rishab",9]


//descending the order
console.log(friendList.sort());
console.log(friendList1.sort());


//reversing the array
console.log(friendList.reverse());


//other ways to desc&asc the arrays

let number=[11,54,8962,72565,52,9565,456]
console.log(number.sort());

let numberResult=number.sort((num1,num2)=>{
   return num1>num2 ? 1:-1
})
console.log(numberResult);
console.log(numberResult.reverse());

//other way to sort the array in asc order.
let numberResult1=number.sort((num1,num2)=>{
    return num1>num2 ? -1:1
 })
 console.log(numberResult1);
