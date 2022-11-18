## Javascript Deep vs Shallow Object Copy

These are the two ways to copy an object in javascript

**Shallow copy**  creates a new object with the same value and memory address of the original object so that when the original object is changed the new object is also changed.  
<br>
**Deep copy**  creates a new object with the same value but a different memory address so that when the original object is changed the new object is not affected.  
<br>
Note that even arrays are objects in javascript.
```js
typeof [] // "object"
```

