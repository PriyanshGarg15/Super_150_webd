
// console.log(a);
// // let a=10;
// var a=10;
//...................................................................................................................................//
var a = 10;
console.log(a);  // Output: 10

var a = 100;
console.log(a);  // Output: 100 (variable 'a' is redeclared)

function fun() {
    var a = 200;
    console.log(a);  // Output: 200 (local variable 'a' inside the function)
}

fun();  // Calls the function, which logs 200

console.log(a);  // Output: 100 (variable 'a' in the global scope)

//...................................................................................................................................//
var a=10;
console.log(a);
var a=100;
console.log(a);
if(true){
    var a=200;
    console.log(a)
}
console.log(a);
//...................................................................................................................................//
let a = 10;
console.log(a);  // Output: 10

a = 100;
console.log(a);  // Output: 100

if (true) {
    let a = 200;
    console.log(a);  // Output: 200 (local to the if block)
}

console.log(a);  // Output: 100 (outside the if block, refers to the outer scope variable)


//Scoping
// let a=10;
// function fun1(){
//     let b=100;
//     function fun2(){
//         console.log(b);
//         function fun3(){
//             console.log(a);
//         }
//         fun3();
//     }
//     fun2();
// }
// fun1();

// var a=10;
// function fun(){
//     console.log(a);
//     var a=200;
//     console.log(a);
// }
// fun();
// console.log(a);

var a=10;
if(true){
    console.log(a);
    var a=200;
    console.log(b);
    console.log(a);
}
let b =300;
console.log(b);