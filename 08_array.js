const arrayone=[10,20,30];
console.log(`Array is ${arrayone}`);
console.log("The length of array is ",arrayone.length);
console.log(`Array access ${arrayone[0]}`);

//update the array
arrayone[2]=200;
console.log(`After update of array ${arrayone}`);

//pursh and pop
arrayone.push(300);
console.log("PUSH",arrayone);

arrayone.pop(2)
console.log("POP",arrayone);

//unshift and shift to add value at beginning and end 

arrayone.unshift(0);
console.log("UNSHIFT 0 ADDED AT BEGINNING",arrayone);

arrayone.shift(0);
console.log("SHIFT 0 REMOVES FROM  AT BEGGING",arrayone);