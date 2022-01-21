const stringOne = 'I am from the global scope';

function one() {
  const stringTwo = 'I am from the outer scope';

  function two() {
    const stringThree = 'scope';
    console.log(stringThree);    // outputs scope
    console.log(stringTwo);    // outputs I am from the outer scope
    console.log(stringOne);    // outputs I am from the global scope
    console.log(stringZero);    // throws reference error as stringZero is not present in any of the scope
  }    

  two();
}

one();