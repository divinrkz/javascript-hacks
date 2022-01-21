## JavaScript Temporal Dead Zone

If we try to access a variable before it is declared, a reference error will be thrown.
It means that the value of the variable cannot be accessed since it is in the temporal dead zone.

Constraint: This is applicable only for ```let``` and ```const```. In the case of ```var```, the default value 'undefined' will be shown. 