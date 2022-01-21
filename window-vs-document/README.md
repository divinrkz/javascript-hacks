## JavaScript ```window``` vs ```document```

The window interface is the root level element containing a DOM document. The global variables are defined on the window object. Methods like ```alert()``` and ```confirm()``` are defined on this object. It also has properties like the document, location, etc. Each browser tab has its window object.

The document is the child of the window object. It is the main object of the DOM (Document Object Model). The document can be accessed via window.document or document. The document object also has many useful methods like document.getElementById(), document.createElement(), document.querySelector(), etc