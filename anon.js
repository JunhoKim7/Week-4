// WHAT IS A VARIABLE
// Identifying a label + a value
// e.g. quantity = 123

// What is a function - a block of code we can call one or more times; 
// usually with a name, label, identifier

// a function is a value, that may or may not have an identifier (function name)
// ANONYMOUS FUNCTIONS

a = 123
b = a
c = b
console.log(c)
// traditional
function greet(firstName){
    return `howdy ${firstName}`;
}

console.log(greet("classmates"));

// functional programming (treats function as a value)
let greet2 = (firstName) => `howdy ${firstName}`;

let hi = greet2;

console.log(hi("classmates"));

// function greet(){
//     console.log("howdy")
// }
// greet();

// let greet = (e)=> {console.log("howdy")
// }

// hi = greet
// hi()