function defaultParameter(num1,num2=1){
    if(num2==0){
        console.log(`Invaid input of ${num2}`);
        return;
    }
console.log(num1/num2);
}
defaultParameter(10,5);
defaultParameter(4);
defaultParameter(0,8)
defaultParameter(4,0)