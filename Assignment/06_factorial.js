function factorialOfNumber(num) {

    if (num == null || num == undefined || num < 0) {
        console.log(`Invalid number ${num}`);
    }
    else {
        //const num = 5;
        let fact = 1;
        for (let i = num; i >= 1; i--) {
            fact = fact * i
        }
        console.log(`Factorial of ${num} is ${fact}`);
    }
}

factorialOfNumber(5);
factorialOfNumber(null);
factorialOfNumber(undefined);
factorialOfNumber(8);