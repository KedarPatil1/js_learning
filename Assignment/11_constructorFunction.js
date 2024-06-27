function Bank(bankName,branchCode,ifscCode,location){
this.bankName=bankName;
this.branchCode=branchCode;
this.ifscCode=ifscCode;
this.location=location;
}
let yesBank= new Bank("YES Bank",1010,"yes01","Jalna")
let mahaBank=new Bank("Maharashtra Bank",1020,"maha02","Pune")
let sbi= new Bank("SBI",103,"SBI002","Beed")

Bank.prototype.openTime="9 am IST";
Bank.prototype.closeTime="5 pm IST"

console.log(`1.The branch name is ${yesBank.bankName}, the code of branch is ${yesBank.branchCode} & IFSC Code ${yesBank.ifscCode} located at ${yesBank.location} and opening time 
is ${yesBank.openTime} and closed at ${yesBank.closeTime}`);

console.log(`2.The branch name is ${mahaBank.bankName}, the code of branch is ${mahaBank.branchCode} IFSC Code ${mahaBank.ifscCode} located at ${mahaBank.location} and opening time 
is${mahaBank.openTime} and closed at ${mahaBank.closeTime}`);


console.log(`3.The branch name is ${sbi.bankName}, the code of branch is ${sbi.branchCode} IFSC Code is ${mahaBank.ifscCode} and located at ${mahaBank.location}  ${mahaBank.openTime} and `);
