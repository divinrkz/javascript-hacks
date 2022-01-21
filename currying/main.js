//With currying
function multiply(a) {
    return (b) => {
        return (c) => {
            return a * b * c;
        }
    }
}

console.log(multiply(5)(6)(7)); 

//Without currying
function mul(a, b, c) {
    return a*b*c;
}

console.log(mul(5, 6, 7));