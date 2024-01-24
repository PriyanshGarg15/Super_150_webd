// 1.while
// 2.do while
// 3.for
// 4.for-in  //object
// 5.for-of  //array

//for-in
// let obj={
//     name:"Hitler",
//     age:52
// }

// for(let i in obj){
//     console.log(i);
//     console.log(obj[i]);
// }
// console.log(obj.name);
// console.log(obj[name]);//wrong
// console.log(obj["name"]);




//for-of
// let arr=[1,2,3,[54,6],7];
// for(let i of arr){
//     console.log(i)
// }


// let arr=[10,20,30,40,50];
// arr.forEach( function(item,index){
//     console.log(index);
//     console.log(item);
// })


// let arr=[10,20,30,40,50];

// let newarr=arr.map(function(item,index){
//     return item*2;
// })
// console.log(arr);
// console.log(newarr);


let arr=[10,20,30,40,50];
let newarr=arr.filter(function(item,index){
    if(item>=50)
    return true;
})
console.log(newarr);

//Homework:
//sort
//find
//reduce