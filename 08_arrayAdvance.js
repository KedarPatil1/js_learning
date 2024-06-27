var array=[10,20,30,40,50,60,70]

// sliece method use to exclude specific element

console.log(`After slicing the array ${array.slice(1,3)}`);

//spliece method used to insert or delete in middle of array splice is used 

console.log(`After splicing the array ${array.splice(0,2)}`);

//to add the element in middle or array

array.splice(1,0,222,555,666)
console.log(`After adding the element in array `,array);
//here we have remove the element are first position
array.splice(1,3,222,252,667)
console.log(`After adding the element in array `,array);

var array=[10,20,30,40,50,60,70]

var array=array.join("-")
console.log(array);