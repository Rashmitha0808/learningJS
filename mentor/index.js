const display = document.querySelector(".display");
const startBtn = document.querySelector(".startTimer");
const stopTimer = document.querySelector(".stopTimer");

let timer;
let hour = 0;
let minutes = 0;
let second = 0;

function startWatch(){
    timer = setInterval(updateTime, 1000);
    startBtn.textContent = "Stop";
    startBtn.removeEventListener('click', startWatch);
    startBtn.addEventListener('click', stopStopwatch)
}
function stopStopwatch() {
    clearInterval(timer);
}


function updateTime(){
    second++;
    if(second === 60){
        second = 0;
        minutes++;
        if(minutes === 60){
            minutes = 0;
            hour++;
        }
    }
    display.textContent = `${hour}: ${minutes}: ${second}`
}

startBtn.addEventListener("click", startWatch)

// let str = "Rashmitha";
// let reversed = str.split("").reverse().join('')
// console.log(reversed);

// let reversedStr = '';
// for(let i = str.length-1; i >= 0; i--){
//     reversedStr += str[i];
// }
// console.log(reversedStr);

// const num = true;
// const myPromise = new Promise((resolve, reject)=>{
//     if(num === true){
//         resolve("hey")
//     }else{
//         reject("No")
//     }
// })

// myPromise.then((result)=>{
//     console.log('succe', result);
// }).catch((error)=>{
//     console.log('err', error);
// })

// const num = true;
// const myPromise = new Promise((resovle, reject)=>{
//     if(num === true){
//         resovle("hey")
//     }else{
//         resovle(false)
//     }
// })

// myPromise.then((res)=>{
//     console.log(res, 'succ');
// }).catch((err)=>{
//     console.log(err);
// })


// why and how
// var a = 10;
// console.log(a);

// // single 
// // event bubling and capturing
// // 
// let a = 10;
// let b = '10'
// console.log(a==b);//true

// let c = 20;
// let d = Number(c);

console.log("e " + 3);
function addInput(){
    const inputNew1 = document.createElement("input")
    const inputNew2 = document.createElement("input")
}
addInput();