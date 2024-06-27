function monthOfYear(month) {
    switch (month) {
        case 0:
            console.log(`No month is there for value ${month}`);
            break;
        case 1:
            console.log(`The value of ${month} jan`);
            break;
        case 2:
            console.log(`The value of ${month} feb`);
            break;
        case 3:
            console.log(`The value of ${month} march`);
            break;
        case 4:
            console.log(`The value of ${month} apr`);
            break;
        case 5:
            console.log(`The value of ${month} may`);
            break;
        case 6:
            console.log(`The value of ${month} jun`);
            break;
        case 7:
            console.log(`The value of ${month} jully`);
            break;
        case 8:
            console.log(`The value of ${month} aug`);
            break;
        case 9:
            console.log(`The value of ${month} sep`);
            break;
        case 10:
            console.log(`The value of ${month} oct`);
            break;
        case 11:
            console.log(`The value of ${month} nov`);
            break;
            case 12:
                console.log(`The value of ${month} dec`);
                break;
        default:
            console.log(`You have entered ${month} as month which is  wrong month`);
            break;
    }

}
monthOfYear(0);
monthOfYear(2);
monthOfYear(12);
monthOfYear(null)
monthOfYear(undefined)

