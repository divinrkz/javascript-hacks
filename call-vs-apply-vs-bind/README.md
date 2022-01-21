## JavaScript ```call``` vs ```apply``` vs ```bind```

### ```call()```
The ```call()``` is a method in JavaScript that helps us to call a function with a given object
as the 'this' value. The ```call()``` method takes all the arguments individually.

Syntax:
```js
functionName.call(thisArgument, ...functionArgs);
```

### ```apply()```
The ```apply()``` method is similar to the ```call()``` method. The only difference is that the ```apply()``` method takes an array as the argument whereas they were taken individually as arguments in the case of the ```call()``` method.

Syntax
```js
functionName.apply(thisArgument, functionArgsArray);
```


### ```bind()```
The ```bind()``` method is used to create a new function from another function with a given object as the this argument.
It creates a copy of the function and then binds it to the object for which it was called. It does not immediately invoke the function and the new copy needs to be invoked separately. 



