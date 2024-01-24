//whenever a js code is run , a GEC is created,along with it a global object is also created.
//In our case that is since we are using the browser the global object is window.
//In case of scoping let and var are considered to be having two different scope:
//Var: global scope or functional scope.
//Let:local scope/script scope or block scope

// var apnanaam="prakhil";
// var a=100;
// function kaju(){
//     console.log(a);
//     var c=20;
//     console.log(c);
// }
// kaju();
// console.log(apnanaam);

//---------------------------------------------------------------------------------------------------------------------------------//

// var a=100;
// let b=100;
// function abrakadabra(){
//     var c=300;
//     let d=400;
//     console.log(c);
//     console.log(d);
// }
// abrakadabra();
// console.log(a);
// console.log(b);