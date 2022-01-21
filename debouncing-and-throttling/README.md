## JavaScript Debouncing and Throttling

Debouncing and Throttling are programming concepts that can be used to optimize performance in JavaScript.

<br><br>
#### Debouncing
Debouncing works by grouping function calls and calling them only after a predefined amount of time has passed since the last call.

###### Example
If a page is scrolled, instead of calling the scroll event handler for every scroll event, debounce can help group these calls and call it once after, let's say, 50 milliseconds since the last scroll event. This would keep the scroll smooth without getting affected by the handler.

<br><br>

#### Throttling
Throttling is somehow similar concept to debouncing. Throttling is a technique in which, no matter how many times the user fires the event, the attached function will be executed only once in a given time interval

###### Example
If a button is pressed 10 times in a single second, we would not want the event handler to be triggered 10 times as the handling might be expensive. We can use throttling to restrict the event handler from getting triggered for 1 second since the previous trigger.

<br><br>

#### Debouncing vs Throttling
The major difference between Debouncing and Throttling is that in the case of debouncing the function call would happen only after the last event whereas in the case of throttling the function call can happen after every X milliseconds if continuous events are happening.