
// shallow copy
let obj1  = { name : 'Foo' , lang : 'js'}
let obj2 = obj1;


//deep copy
let obj3 = JSON.parse(JSON.stringify(obj1));

// deep copy
let obj4 = Object.assign({}, obj1);

obj1.name = 'Bar';
console.log(obj1 , obj2 , obj3 , obj4);