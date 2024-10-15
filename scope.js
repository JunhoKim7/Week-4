eilish = "billie " // global scope variable - accessible ANYWHERE

function classRoom() { // start block
   let firstName = "Junho " // block scope - created here, lives and dies here
    console.log(firstName + "is a nerd");
    console.log(firstName + "likes to listen to " + eilish)
} // ends block

console.log(eilish + "has good vibes");

classRoom();

// firstName does not exist in the global scope
console.log(firstName + "is our teacher."); //firstName is not defined



// global
// local
// function/block scope {{nesting}}

let output = 0;
function add(a,b){
    let output = a + b
    return output;
}
function mult(a,b){
    let output = a * b
    return output;
}

console.log(mult(6,7));
console.log(add(6,7));

console.log(output); 

