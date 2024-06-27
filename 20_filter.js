let array =[10,20,30,40,50,55];

const newArray=array.filter((element)=>{
    return element %2==0;
})
console.log(newArray);


let a=[10,20,50,80,30]

const b=a.filter((element)=>{
    if(element>=20 && element<=50){
     return element
    }
})
console.log(b);