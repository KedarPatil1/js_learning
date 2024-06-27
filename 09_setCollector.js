const setnumber= new Set()
//add
setnumber.add(10);
setnumber.add(20);
setnumber.add(30);

console.log(setnumber);

//delete
setnumber.delete(30)
console.log(setnumber);

//to find the size
console.log(setnumber.size);

//traversing in set

for (const iterator of setnumber) {
    console.log(iterator);
}


let a=[10,20,30,10,20]
y=[...new Set(a)]
console.log(y);