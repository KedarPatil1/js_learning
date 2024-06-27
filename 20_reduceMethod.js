let array = [3, 6, 5, 2]; 
array.sort()
console.log(array);
const sum = array.reduce( (runningTotal, value)=>{
    return runningTotal + value;
},0 );
console.log(sum);

let a=["zya","hzh",]
console.log(a.sort());