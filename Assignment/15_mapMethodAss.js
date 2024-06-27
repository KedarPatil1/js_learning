const arrayElement=[20,11,40,25,23,11,9,31,60,2,19];
const newarray=arrayElement.map((element)=>{
    return element+10;
});
console.log("Afer addidin 10 array",newarray);

const newarray1=arrayElement.map((element)=>{
    return element*element*element;
});
console.log("After cube of array",newarray1);
