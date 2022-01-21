//Without Hoisting.
var num = 4;
console.log(num);

//With Hoisting.
num2 = 5;
console.log(num2);
var num2;


//Function Hoisting.

//Without Hoisting
function functionName() {
    console.log('Hoisting');
}
functionName();


//With Hoisting
functionName2();
function functionName2() {
    console.log('Hoisting');
}