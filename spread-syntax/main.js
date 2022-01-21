// Function arguments
function sum (num1, num2, num3) {
    return num1 + num2 + num3;
}

const numbers = [5, 7, 2, 1, 3];
const result = sum(...numbers);
console.log(result); // 14 (5 + 7 +2)


// Adding elements to array
let numbers = [5, 7, 2, 1, 3];
numbers = [ ...numbers, 4, 5, 8];
console.log(numbers); // [5, 7, 2, 1, 3, 4, 5, 8]


//Merging two arrays.
let numbers = [5, 7, 2, 1, 3];
const newNumbes = [4, 5, 8];
numbers = [ ...numbers, ...newNumbers ];
console.log(numbers); // [5, 7, 2, 1, 3, 4, 5, 8]


//Object desctructing
const obj = { 'firstName': 'JS', 'lastName': 'Dev' };
const clonedObject = { ...obj };

//(Object destructuring - new properties)
const obj = { 'firstName': 'JS', 'lastName': 'Dev' };
const country = 'USA';
console.log({...obj, country, companies: ['Netflix', 'Spofity', 'Airbnb']});