console.log(`----------------First 3 steps-----------`);
const professor = {
    proName: "Warron",
    city: "New Work",
    state: "Taxes",
    county: "USA" ,
    degree:{
        engineering:"CSC",
        PHD:"Adv Computing",
        CDAC:"Adv Programmin"
    },
    certificate:["Hacer-Rank paricipation","Certificate in IFS Course","Certificate in adv computing"]
}

console.log(JSON.stringify(professor));

console.log(`----------------First 4 steps-----------`);
professor.totalExp=14;
console.log(`After adding new pair of total experience output is `,(JSON.stringify(professor)));
console.log(`----------------First 5 steps-----------`);
professor.city="San frisco"
console.log(`After updating the existing property output is `,(JSON.stringify(professor)));
console.log(`----------------First 6 steps-----------`);

professor.certificate.splice(2,0,"Orcal Certificate") 
console.log("After adding new certificate in array at 2nd positon",professor.certificate);
console.log(`----------------First 7 steps-----------`);

console.log("Last element in array.certificate is",professor.certificate.slice(-1));
