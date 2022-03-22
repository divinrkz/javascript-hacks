String.prototype.repeatify = String.prototype.repeatify || function(times) {
    var str ='';
    for (var i =0; i < times; i++) {
        str += this;
    }
    return str;
}

// Another important point here is to demonstrate that you are aware about how to not override possible already defined functions.
//  This is done by testing that the function didn’t exist before defining your own.