function stringHandsOn() {
    var name = " Hey you are doing good keep it up    "
    console.log(`1. String without change: ${name}`);
    console.log(`2. Length of string ${name.length}`);
    var result = name.trim();
    console.log(`3.String after trim ${result.length}`);
    console.log(`4.Extra space removed from string is ${name.length - result.length}`);
    var result1=result.slice(-1)
    console.log(`5.First char is ${result.charAt(1)} and last char is ${result1}`);
    var result2=result.split(" ")
    console.log(`6.Total no of words ${result2.length}`);
    console.log(`7.Index of good is ${result.indexOf("good")}`);
    var result2=result.substring(1,22)
    console.log(`8.Substring starting from 22 index is: ${result2}`);
    var result2=result.endsWith("up")
    console.log(`9.The string end with up is ${result2} `);
    var result2=result.startsWith("Hey")
    console.log(`10.The string start with hey is ${result2} `);

}
stringHandsOn()