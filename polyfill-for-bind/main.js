

Function.prototype.customBind = function (thisArg, ...args) {
    const fn = this;
    return function (...fnArgs) {
        fn.apply(thisArg, [...args, ...fnArgs]);
    }
}

const personOne = {
    firstName : "Elon",
    secondName : "Musk"
}

function printFullName(company, country) {
    console.log(this.firstName + " " + this.secondName + ", " + company + ", " + country);
}

// Here, we are creating a new function by calling customBind on printFullName
const printPersonOneDetails = printFullName.customBind(personOne, ["Tesla"]);
printPersonOneDetails("United States");