let totalPrice = coursePrice * 1.18;     //---------
                                         //         | ------>  this is TDZ for coursePrice
                                         //         |
console.log(totalPrice);                 //---------

let coursePrice = 699;

//The above example throws a reference error since the variable was called before it was declared. 