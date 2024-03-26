// const outerCir = document.querySelector(".outer");
// const innerCir = document.querySelector(".inner");
// const red = document.querySelector(".red");
// const blue = document.querySelector(".blue");


// red.addEventListener("click",()=>{
//     outerCir.style.backgroundColor = "red";
//     innerCir.style.backgroundColor = "blue";
//     console.log("hello ima outer");
// })

// blue.addEventListener("click",(e)=>{
//     outerCir.style.backgroundColor = "blue";
//     innerCir.style.backgroundColor = "red";
//     console.log("hello ima outer");
// })

// {
//     let a = 100;
//     function abc(){
//         console.log(a);
//     }
//     abc();
// }

// function outer(){
//     let c = 400;
//     function inner(){
//         console.log(c);
//     }
//     inner();
// }
// outer();

// let b = 200;
// function bcd(){
//     console.log(b);
// }

// map/filter/reduce
// let arr = [1,3,5,4];

// arr.map((data)=>{
//     console.log(data*2 , " I am new Map");
// })

// arr.filter((data1)=>{
//     console.log(data1 > 2);
// })

// let reducedNum = arr.reduce((acc, curr)=>{
//    return acc+curr
// },0)
// let reducedNumm = arr.reduce((accu,curr)=>accu+curr,0);

// let obj1 = {
//     name: "rash",
//     age:20
// }
// let ob2 = obj1;

// console.log();

// polyfils

// map
let arr = [1,2,3,4];
function myMap(value,arr){
    arr();
    value();
}

function myValue(){
    for(let i = 0; i < arr.length; i++){
        console.log(i*2, i, arr, "Hello I am value");
    }
    // arr.forEach(element => {
    //    console.log(element*2, "Hello I am value");
    // });
}

function myArry(){
    console.log(arr,"Hello I am map array");
}
myMap(myArry, myValue);

arr.map((val,ind,arr)=>{
    console.log(val*2,ind, arr);
})