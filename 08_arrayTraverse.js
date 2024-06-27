let array=[10,20,30,40]
console.log(`array index of ${array.indexOf(20)}`); 

for( let x=array.length-1; x>=0; x--){
    let y=array[x]
    console.log(y);
}

console.log(`Log the even numbers......`);

let arrayNum = [11, 20, 32, 40, 15, 23, 80];

for (let index = 0; index < arrayNum.length; index++) {

    const element = arrayNum[index];

    if (element%2==0) {

        console.log(element);

    }

}

 

console.log(`Log the Odd numbers......`);

let arrayNumber = [11, 20, 32, 40, 15, 23, 80];

for (let index = 0; index < arrayNumber.length; index++) {

    const element = arrayNumber[index];

    if (element%2!=0) {

        console.log(element);

    }

}