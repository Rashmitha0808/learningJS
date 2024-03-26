// let a = 10;
// let b = "20";
// console.log(a+b);//dureing the code executin implicit conversion 1020 also called coercion

// let c = 30;
// let d = Number(c);
// console.log(d+2);// explicit developer will do this 32 also called type casting


// // - always subtracts it wont care the string or not
// console.log('10'-'30'+'30'); 
// console.log(10-'30');
// console.log("10"+'30');
// console.log("10"+'30'-"20");
// console.log("10"+'30'-10);

// hoisting
// console.log(a);// undefined because the function and the variable hoisted top not initialized
// var a = 20;
// console.log(a);//value 20
// function abc(){
//     a = 30;
//     console.log(b);
//     var b = 30;
// }
// abc();

// console.log('12'=== 12);
// let name;
// let age = null;

// console.log(name, age);

// const arr = [1,3,4,56,6];
// arr.push(1)
// arr.shift()
// arr.unshift(23)
// console.log(arr.includes(4), "yes" , " No");
// console.log(arr.indexOf(23));
// console.log(arr.pop());
// console.log(arr);

// let obj1 = {
//     name: "rashmita",
//     age: 45,
// }
// console.log(obj1.name);

// temp dead zone
// console.log(temp);
// let temp = 45;
// console.log(temp1);
// const temp1 = 45;

// function highFUn(callback1, callback2){
//     callback1();
//     callback2();
// }
// function hell(){
//     console.log("hello I am hi");
// }
// function bye(){
//     console.log("hello I am bye");
// }
// highFUn(hell, bye);

// setTimeout(()=>{
//     console.log("hello I am set time out for 4 second");
// },1000)

// function outerFun(){
//     const outerlet = "Hey  I am outer fun";
//     function innerFun(){
//         console.log(outerlet);
//     }
//    return innerFun;
// }
// const inner = outerFun();
// inner()

// function outerFun(){
//     const name = "Hey  I am outer fun";
//     function innerFun(){
//         console.log(name);
//     }
//    innerFun();
// }
// outerFun();

// const parent = document.querySelector(".parent");
// parent.addEventListener("click",(e)=>{
//     console.log("hello");
// })
// const child = document.querySelector(".child");
// child.addEventListener("click",(e)=>{
//     e.stopPropagation();
// })


// (() =>{
//     console.log("hey I am IIFE")
// }
// )();

// let obj2 = {
//     name: "Rashmitha",
//     class: 12,
// }
// let ov = Object.getPrototypeOf(obj2)
// console.log(ov);

// const arr1 = [1,2,3,5];
// const [one, two] = arr1;
// console.log(one,two);

// const arr2 = [1,2,3,4];
// const newarr2 = [6,7,8,9, ...arr2];
// console.log(newarr2);

// const arr3 = [3,4,5,5];
// arr3.filter((num)=>num>3).map((value, index)=>{
//     console.log(value*2 , index);
// }).filter(num => num < 2 , "I am greater")

// const reducedValue = arr3.reduce((accu, curr)=>{
//     return accu + curr;
// },0)
// console.log(reducedValue);

// const count = true;

// currying
// function sum(a){
//     return (b)=>{
//         return (c)=>{
//             return a+b+c;
//         }
//     }
// }

// console.log(sum(1)(2)(3));


// const api = "https://jsonplaceholder.typicode.com/posts";

// async function fetchData(){
//     try{
//         const respone = await fetch(api);
//         const data = respone.json();
//         console.log(data);
//         displyData(data);
//     }catch(error){
//         console.log(error);
//     }
// }
// fetchData();

// function displyData(data){
//     const container = document.querySelector(".container");
    
//     data.forEach(post =>{
//         const postElement = document.createElement('div');

//         postElement.classList.add('post');
//         postElement.innerHTML = `<h2>${post.title}</h2>
//         <p>${post.body}</p>`

//         container.appendChild(postElement);
//     })

// }

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


// const sum = true;

// const myPromise = new Promise((resolve, reject)=>{
//     if(sum){
//         resolve("done");
//     }else{
//         reject("No");
//     }
// })

// console.log(myPromise);

// myPromise.then(resolve=>{
//     console.log('succes', resolve)
// }).catch((error)=>console.error()
// )

// async function myFun(){
//     try{
//         const result = await myPromise;
//         console.log('Sucess of async', result);
//     }catch(error){
//         console.log(error);
//     }
// }
// myFun();

// const str = 'rashmitha'

// const arr4 = [4,5,6,7];
// for(let i = 0; i < str.length; i++){
//     console.log(str[i]," i am traditional array iteration");
// }

// arr4.forEach(element => {
//     console.log(element, "hey I am forEach with callback");
// })
// for(const ele of str){
//     console.log(ele, "I am new iterate to all arr, map, strings so on");
// }

// for(const ele of arr4){
//     console.log(ele, "I am not recomend for in to array its for object");
// }


// const porductAPI = 'https://fakestoreapi.com/products';

// async function fetchData(){
//     try{
//         const result = await fetch(porductAPI);
//         const data = await result.json();
//         updateUI(data);
//         console.log(data);
//     }catch(error){
//     console.log(error);
// }
// }
// fetchData();

// const container = document.querySelector(".container");
// function updateUI(data){
//     data.forEach(product => {
//         const main = document.createElement('div');
//         main.classList.add('products');

//         main.innerHTML = 
//         `<h3>${product.title}</h3>
//         <span>${product.price}</span>`

//         container.appendChild(main);
//     });

//     data.map((data, id)=>{
//         let aside = document.createElement('div');
//         aside.classList.add('asidebar');

//         if(data.price > 50){
//             aside.innerHTML = 
//             `<h4>${data.description}</h4>`
//         }

//     container.appendChild(aside)
// })
// }
// updateUI();

// console.log('1' == 1); 
// console.log('1' + 1);//11
// console.log('10' - 1);//9

// let a = '20';
// let b = Number(a);
// console.log(typeof(b), "i am num"); 


let x = 10;
console.log(--x)