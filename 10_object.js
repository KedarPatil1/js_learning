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
console.log(student.stuMob);
student.address.area="newarea"
console.log(student.address);

student.stuMob=8888888
console.log(student);

student.frdlist=["A","B","C"]
console.log(student.frdlist);
//--------------------------------------------------------------------

// const student = {

//     stdName: "Jenny",
   
//     rollNum: 107,
   
//     city: "Pune",
   
//     isMarried: false,
   
//     friendsList: ["Elon", "Bill", "Stew"],
   
//     address: {
   
//        flatNum: 1005,
   
//        society: "Horizon",
   
//        street: "Wakad",
   
//        PIN: 411057
   
//     },
   
//    };
   
//    console.log(student);
   
//    console.log(`Accessing element from object`);
   
//    console.log(`Student Name: ${student.stdName}`);
   
//    console.log(`Married status:  ${student.isMarried}`);
   
//    console.log(`City:  ${student["city"]}`);
   
    
   
//    console.log(`Accessing new entry`);
   
//    student.mobile = "9966 7788 55";
   
//    student.address.city = "Pune";
   
//    console.log(student);
   
    
   
//    console.log(`Update`);
   
//    student.isMarried = true;
   
//    student.friendsList[1] = "Bill gates";
   
    
   
//    console.log(`Delete`);
   
//    delete student.city;