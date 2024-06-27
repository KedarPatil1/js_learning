//1 Funcation with no argument and no return type

function show(){
    console.log("This is a show function");
}
show();

function square(){
   
    var result=10*10;
    console.log("Square of no",result);
}
square();

2. //Function with agrument and no return type

function squareNoWithArgs(num) {
    console.log("Enter number is",num);
    var result=num*num;
    console.log("Square of",num,"is",result);
}

squareNoWithArgs(20);
squareNoWithArgs(40);

3. //Function with agurument and  return type

function cudeofnum(num){

    console.log("Cube of :",num);
    var result=num*num*num;
    return result
}
var cude=cudeofnum(3);
console.log(cude)