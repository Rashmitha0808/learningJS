
// Create a JavaScript code snippet that enables 
// the user to input two numbers through HTML
//  textboxes. Upon clicking a button, the code
//   should retrieve these input values, validate them, 
// perform the summation, and display the result on the web page.
const container = document.querySelector(".container");
const input1 = document.querySelector(".input-1");
const input2 = document.querySelector(".input-2");
const btn = document.querySelector(".btn");
const clear = document.querySelector(".clear");
const para = document.createElement('p');

btn.addEventListener("click", ()=>{
    
    let firstNum = input1.value;
    let secondNum = input2.value;
    
    if(!firstNum && !secondNum){
        return;
    }

    let num1 = Number(firstNum);
    let num2 = Number(secondNum);

    para.textContent = `${num1 + num2}`
    container.appendChild(para);

    input1.value = ""
    input2.value = ""
})

clear.addEventListener("click", ()=>{
    para.textContent = ""
})