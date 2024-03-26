// const api = 'https://gorest.co.in/public/v2/users';

// async function fetchData(){
//     const response = await fetch(api);
//     const result = await response.json();
//     console.log(result)
// }
// fetchData();
// const main = document.querySelector(".main");
// const para = document.querySelector(".para");
// const name = document.querySelector(".name");
// const email = document.querySelector(".email");
// main.map((data,index)=>(
//     main.appendChild
// ))

// var heading = document.querySelector(".heading");
// heading.textContent = "I am rashmitha";


// temdeadzone

// console.log(a);
// let a = 10;
//gives refernce error before inizlation

// console.log(b);
// const b = 20;
//gives refernce error before inizlation

// console.log(c);
// var c = 30;
//gives undefined

// setTimeout(()=>{
//     console.log("hello i am set timeout 2 sec")
// },2000)

// function abc (){
//     console.log("hello i am function 1");

//     function bcd(adding){
        
//         console.log(" I am function 2 inside 1 "+ adding );
//     }
//     bcd(10);
// }
// abc()

// callback
// function greet(name, callback1, callback2, callback3){
//     console.log("hello" + name );
//     callback1();
//     callback2();
//     callback3();
// }
// function sayBye(){
//     console.log("bye");
// }
// function sayBye1(){
//     console.log("rashmi iam new callback");
// }
// function sayBye3(){
//    console.log("hello im callback 3");
// }
// greet("rashmi",sayBye,sayBye1,sayBye3);


// closure
// function outerFun(){
//     let outer = "Hello i m outerfunction";
//     function innerFun(){
//         console.log(outer);
//     }
//      innerFun();
// }
// outerFun();

// let arr = [1,2,3,4,5,6];

// [first, second, third,forth, ,sixth] = arr;

// console.log(first)
// console.log(second)
// console.log(third)
// console.log(forth)
// console.log(sixth)

// const api = 'https://gorest.co.in/public/v2/users';
// const dataContainer = document.getElementById("datacontainer");
// async function fetchData(){
//     const
// }

// console.log(myFun(2));
// function myFun(num){
//    return (num === Number) ? true : false;
// }

// console.log(a);
// var a = 10;

// abc();
// function abc(){
//    console.log("hello");
// }

// console.log(a);
// let b = 20;

// let c = 10;
// let d = "10";

// console.log(c===d);

// let e = null;
// let f;

// console.log(e, f);

// var g = 50;

// function cde(){
//    var g = 30;
//    console.log(g)
// }
// var g = 40;
// console.log(g, " outside");
// cde();
// cde();

// function greet1(callbak1, callbak2){
//    callbak1();
//    callbak2();
// }
// //callback arguemnt need to be addded while calling
// function sayHi(){
//    console.log("Hello I am one");
// }
// function sayBye5(){
//    console.log("Hello I bye");
// }

// greet1(sayHi, sayBye5); 


function setTimee(callbak1, callback2){
   callbak1();
   callback2();
}
function setTime1(){
   setTimeout(()=>{
      console.log("hello I am one");
   },2000)
}
function setTime2(){
   console.log("hello I am two");
}
setTimee(setTime1,setTime2);//set timeout tow and one 

function setTime3(){
   setTimeout(()=>{
      console.log("hello I am oneof settimeout1");
   },2000)
}
function setTime4(){
   console.log("hello I am two of settimeout2");
}
setTime3();
setTime4();

