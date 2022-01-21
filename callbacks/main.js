function square(number) {
    console.log(number * number);
} 

function mainFunction(callback) {
    const number = 4;
    callback(number);
}
mainFunction();