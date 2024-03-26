// reverse a string
// implicame to function in stop watch
// is it prime ot rnot
// sign up form all the input should be there


// reversing a string
// let stringg = "Rashmitha";

// let reverseIt = stringg.split("").reverse().join("");
// console.log(reverseIt)


// // isPrimeNumber
// function isPrime(num){
//    for(let i = 2; i < num; i++){
//     if(num%i === 0){
//         return false;
//     }
// }
// return true;
// }
// console.log(isPrime(15))

// stopwatch
// let sec = 0;
// let hours = 0;
// let min = 0;

// validation form

// const userName = document.querySelector(".namee");
// const email = document.querySelector(".email");
// const password = document.querySelector(".password");
// const submitButton = document.querySelector(".submitButton");

// const button = document.querySelector(".btn");
// button.addEventListener("click",()=>{
//     console.log("hello I am clicked");
// })

// // closure
// function outerFun(){
//     let y = 20;
//     function innerFun(){
//        console.log(y);
//     }
//     innerFun();
//  }
//  outerFun();

// (function(){
//     console.log("hello i am IIMF");
// })();



async function fetchData(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await response.json();
        const mainContainer = document.querySelector(".postContainer");
        
        mainContainer.map(post => {
            const postDiv = document.createElement('div');

            postDiv.innerHTML = `<h3>${post.title}</h3><p>User ID: ${post.id}</p>`
       
            mainContainer.appendChild(postDiv);
    });
       
        console.log(data);
    }catch(error){
        console.log(error);
    }
}
fetchData();

