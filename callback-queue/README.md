## JavaScript Callback Queue

When asynchronous functions get called, they are added to the callback queue.
It is a queue that follows the execution order of First In First Out (FIFO).

The functions in the callback queue will be executed only if the call stack
is empty and the program reaches the end.