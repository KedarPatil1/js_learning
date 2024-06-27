const arrayRollNumbers=[113,45,56,11,32,45,109,799,56,45];

console.log(`After reversing the array element result as ${arrayRollNumbers.reverse()}`); 
console.log(`Sorting the array ${arrayRollNumbers.sort()}`);
//sorting the array in asc order

const result=arrayRollNumbers.sort((n1,n2)=>{
    return n1>n2 ? -1:1
})
console.log("Sorting the array in asc order",result);

const max= Math.max(...arrayRollNumbers)
console.log("Max number in array is ",max);
const min= Math.min(...arrayRollNumbers)
console.log("Min number in array is ",min);

const remDuplicate=[...new Set(arrayRollNumbers)]
console.log("Removed the duplicate from array result is ",remDuplicate);