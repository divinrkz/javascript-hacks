function doTask() {
    return function() {
        console.log('Hello World');
    }
}

const x = doTask();
x();