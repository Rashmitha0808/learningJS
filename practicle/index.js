// map
// Array.prototype.myMap = function(callback){
//     let newArray = [];

//     for(let i = 0; i < this.length; i++){
//         newArray.push(callback(this[i] , i , this));
//     }

//     return newArray;
// }

let arr = [2,4,5,6];
// let newMap = arr.myMap((item, i, arr)=>{
//     return item*3;
// })
// console.log(newMap);

// Array.prototype.myFilter = function(callback){
//     let newArray = [];
//     for(let i = 0; i < this.length; i++){
//         if(callback(this[i], i , this)){
//             newArray.push(this[i]);
//         }
//     }
//     return newArray;
// }

// let myFilterNew = arr.myFilter((item)=>{
//     return item > 2;
// })
// console.log(myFilterNew);