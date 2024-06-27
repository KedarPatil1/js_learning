const jsonData=`{
   
    "name":"Alex Melon",
    "id":"eeee045",
    "Role":["dev", "js"],
    "doj":"10-10-2020"
}`

var x=JSON.parse(jsonData)
console.log(x);

// console.log(x.Role);
var y=x.Role[0]
console.log("Role is",y);

var y=(x.name.split(" "))
var z=y[1]
console.log("Last Name is",z);


var y=(x.doj.split("-"))
var z=y[2]
console.log("Joining year of employee is ",z);







