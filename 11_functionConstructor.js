function Player (fullName, totalRuns) {
    this.fullName=fullName;
    this.totalRuns=totalRuns;
}
let rishab= new Player("Rishab",89);
let virat= new Player("Virat",88);
Player.prototype.Country="India";

console.log(`Name of player is ${rishab.fullName} , ${rishab.totalRuns} and ${rishab.Country}`);
console.log(`Name of player is ${virat.fullName} , ${virat.totalRuns} and ${virat.Country}`);


let date= new Date()
console.log(date);