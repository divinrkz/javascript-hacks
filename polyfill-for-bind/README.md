## JavaScript PolyFill for ```bind()```
Polyfill is a way to implement a JavaScript feature not supported by older web browsers. Using polyfill, new features can be made available on the older versions. Let us look at how we can implement the functionality of a bind() function.

##### Syntax
```js
Function.prototype.customBind = function (thisArg, ...args) {
    const fn = this;
    return function (...fnArgs) {
        fn.apply(thisArg, [...args, ...fnArgs]);
    }
}
```
