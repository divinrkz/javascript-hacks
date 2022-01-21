## JavaScript Scope Chain

During execution, if a variable or a function cannot be found inside a scope,
the JavaScript engine searches for them in the outer scope.
If the outer scope is also not having the variable or the function, the global scope will be searched.
This entire chain of scopes (from the current scope to the global scope) is called the scope chain in JavaScript.
If the variable or the function is not found in the global scope, a reference error is thrown.