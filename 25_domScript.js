console.log("DOM API'S");
const p=document.getElementById("heading")
const a=document.getElementById("h2")
console.log(p,a);

console.log("New DOM Object using query selector by ID");

const b=document.querySelector("h2","heading")
const c=document.querySelector("#heading")
console.log(b);
console.log(c);


console.log(" New DOM Object using query selector by CLASS");
const d=document.querySelector(".orderList")
console.log(d.innerHTML);
//updated the statement
h2.innerHTML="dommm"

//dom end


console.log(`===== Creating new element =======`);

const elementP = document.createElement("p");

const textNodeAddress =document.createTextNode("1005, iTrend, Wakad, Pune, MH  - 411057");

elementP.appendChild(textNodeAddress);

const divElement = document.querySelector("#address-content");

divElement.appendChild(elementP);

//on click event

function tech(){
    console.log("Hello This is tech function");
}

// const sub_button=document.addEventListener("click", ()=>{
//     console.log("you clicked me");
//     alert("Hey bhau you clicked me  ")
// })


// const sub_button1=document.addEventListener('mouseover', ()=>{
//     //console.log("you clicked me");
//     alert("Hey bhau you clicked me  ")
// })

const squareanumber=document.querySelector("#number_square")
squareanumber.addEventListener('click',()=>{
    const num=prompt("Enter a number",1)
   const trueorfalse= confirm(`Are you sure to get the square of ${num}`)
  if(trueorfalse){
    const result=num*num
    alert(`Square of number is ${result} `)
  }
})


