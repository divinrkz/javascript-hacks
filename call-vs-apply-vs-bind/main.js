const personOne = {
  firstName: "Js",
  secondName: "Dev"
}

const personTwo = {
  firstName: "Js",
  secondName: "ZuckerBerg"
}

const getFullName = function (company, country) {
  console.log(this.firstName + " " + this.secondName + ", " + company + ", " + country);
}

// call() example
getFullName.call(personOne, "Tesla", "United States");       // Output: Js Dev, Tesla, United States
getFullName.call(personTwo, "Facebook", "United States");    // Output: Js Zuckerberg, Facebook, United States

//apply() example
getFullName.apply(personOne, ["Tesla", "United States"]);       // Output: Js Dev, Tesla, United States
getFullName.apply(personTwo, ["Facebook", "United States"]);    // Output: Js ZuckerBerg

// bind() Exanple
const getPersonFiveDetails = getFullName.bind(personOne, ["Tesla", "United States"]);
// Calling the bind method on 'getFullName' creates a copy of it, which is assigned to 'getPersonFiveDetails'.
// When the 'getPersonFiveDetails' is called separately, we will get the desired output
getPersonFiveDetails(); 