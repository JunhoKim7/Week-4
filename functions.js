// give a name to a step (like a table of contents or book outline)

function begin() {
    console.log("IN THE BEGINNING...");
}
function middle() {
    console.log("INTO THE UNKNOWN...");
}
function end() {
    console.log("WRAPPING IT UP. FINNITO.");
}
// invoke or call
begin()
middle()
end()

/////////////////////////////////////////////////
function greet(who, age) {
    console.log(`Howdy ${who}!!!`);
    if(age >= 20) {
        console.log("Gosh you're old");
    }else{
        console.log("All the time in the world")
    }
}
greet("Junho", 25)
greet("Class", 17)

console.log(new Date(0));