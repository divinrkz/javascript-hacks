function welcome() {
    const name = 'closures';
    function displayName() { // displayName() is the inner function, a closure
        console.log(name);  // use variable declared in the parent function
    } 
    displayName();
}

welcome();