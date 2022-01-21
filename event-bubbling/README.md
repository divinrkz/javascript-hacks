## JavaScript Event Bubbling

Assume that an HTML element is present inside another element (parent element) and both
of them have their event handlers. In this scenario, if an event happens on the child element,
the event handler of the child element will handle it first followed by the event handler of the parent element.
This principle is called event bubbling in JavaScript.


###### Example
 ```html
 <form onclick="alert('form : parent')">form : parent
  <div onclick="alert('div : child of form')">div : child of form
    <p onclick="alert('p : child of div')">p : child of div </p>
  </div>
</form>
```