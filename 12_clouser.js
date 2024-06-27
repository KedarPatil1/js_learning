var globalVariable = 20;
function outerFunction() {
    var localVariable = 10;
    let innerfunction1 = function () {
        let y=30
        console.log("Inner function");
        console.log(globalVariable);
        console.log(localVariable);
        console.log(y);
    }
    return innerfunction1
}
let x = outerFunction()
x()