//Without Hoisting.
var num = 4; // num is declared and then initialized
console.log(num); // num is called

//With Hoisting.
num2 = 5; // num is initialized
console.log(num2);  // num is called
var num2; // num is declared after initializing it. During execution, this will be moved to the top


//Function Hoisting.

//Without Hoisting
function functionName() {
    console.log('Hoisting');
}
functionName();


//With Hoisting
functionName2(); // function is called before declaring it
function functionName2() {
    console.log('Hoisting');
}