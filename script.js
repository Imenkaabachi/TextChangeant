const input = document.querySelector('#input');
input.style.fontSize = document.querySelector("#size").value+"px";
input.style.color = document.querySelector("#color").value;
input.style.fontFamily = document.querySelector("#family").value;
document.querySelector('#color').addEventListener("input",()=>{
    input.style.color = document.querySelector("#color").value;
})
document.querySelector('#size').addEventListener("input",()=>{
    input.style.fontSize = document.querySelector("#size").value+"px";
})
document.querySelector('#family').addEventListener("input",()=>{
    input.style.fontFamily = document.querySelector("#family").value;
})