## JavaScript Iterator and Generators

### Iterators

An iterator is any JavaScript object that can be used to iterate over a collection of data. An iterator would generally have a next() method using which it can iterate over the data. The next method returns two properties:

- value: the value in the iteration
- done: boolean property signifying the end of the iteration.

After the iteration is completed, the next() method returns ```{ done: true };```


###### Compared to the usual for-loop or while-loop, the loading of the entire data is not required before iterating over it. By using an iterator, only the current position of the element is required.


### Generators
Generators are functions that can be used to create custom iterators in a simple way.

Generator functions can be created using the ```function*``` syntax. It comes with a ```yield``` operator which allows us to pause the function until the next value is requested.

The generator function does not initially execute the code but returns an iterator called generator. When a value is used by the generator's next method, the generator function executes until there is a yield keyword. On encountering yield, it outputs the value and pauses the execution until it has to resume the function execution on demand. 
