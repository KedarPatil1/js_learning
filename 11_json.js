const employeeJSON=`{
    "name":"Kedar",
    "ID":10,
    "DOB":"20/20/20",
    "Desigation":"CFO",
    "Skill":["js","c#"],
    "address":{
        "village":"Ambad",
        "pin":10
    }
}`
console.log(employeeJSON);

//JSON PARSE

const employee = JSON.parse(employeeJSON);console.log(employee);
console.log(employee.Skill);

// object to json







const student={
    studName:"Kedar",
    studId:1,
    stuMob:2222222,
    address:{
        street:"abc chouwk",
        landmark:"JM Road",
        pin:22222
    }

}

const  x= JSON.stringify(student)
console.log(x);



