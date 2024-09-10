let button=document.querySelector("button");
let div1=document.querySelector(".sunny");
let input=document.querySelector("input");

console.log(button,div1);
button.addEventListener("click",()=>{
let p=document.createElement("pre");
let body=document.querySelector("body");
body.appendChild(p);
div1.appendChild(p);
let c=input.value;
let str=[c];
let j=0;
let k;
for(let i of str){
  if(j<4){
  k=i;
j++;
  }
    console.log(i);
}
const l=k.split("-");
const year=l[0];
if(year==2024){
    p.innerText='';
}
    const month=2024-year;
p.innerText=`you are ${month} years old`;
p.style.color="red";
})