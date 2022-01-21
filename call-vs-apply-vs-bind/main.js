// call() example
const personOne = {
    firstName : "Js",
    secondName : "Dev"
  }
  
const getFullName = function(company, country) {
    console.log(this.firstName + " " + this.secondName + ", " + company + ", " + country);
}
  
const personTwo = {
    firstName : "Js",
    secondName : "Dev"
}
  
getFullName.call(personOne, "Tesla", "United States");    // outputs Js Dev, Tesla, United States
getFullName.call(personTwo, "Facebook", "United States");    // outputs Js Zuckerberg, Facebook, United States


//apply() example
const personThree = {
    firstName : "Js",
    secondName : "Dev"
  }
  
const getFullName = function(company, country) {
    console.log(this.firstName + " " + this.secondName + ", " + company + ", " + country);
}

const personFour = {
    firstName : "Js",
    secondName : "Dev"
}

getFullName.apply(personOne, ["Tesla", "United States"]);    // outputs Js Dev, Tesla, United States
getFullName.apply(personTwo, ["Facebook", "United States"]);    // outputs Js ZuckerBerg


//bind() Exanple
const personFive= {
    firstName : "Js",
    secondName : "Dev"
}
  
const getFullName = function(company, country) {
  console.log(this.firstName + " " + this.secondName + ", " + company + ", " + country);
}
  
const getPersonFiveDetails = getFullName.bind(personFive, ["Tesla", "United States"]); 
getPersonFiveDetails();

// calling the bind method on 'getFullName' creates a copy of it, which is assigned to 'getPersonFiveDetails'.
//  When the 'getPersonFiveDetails' is called separately, we will get the desired output