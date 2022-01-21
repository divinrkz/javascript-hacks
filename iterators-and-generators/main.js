//Iterator Example
const courses = ['Learn to Code', 'SDE Kickstart', 'OOP', 'SDE Bootcamp'];

const iterator = courses[Symbol.iterator]();

while (true) {
    next = iterator.next();
    if (next.done) {
        break;
    }
    console.log(next.value);
}



//Generator Example
function* objects(obj) {
    const keys = Object.keys(obj);

    for (const key of keys) {
        yield[key, obj[key]];
    }
    
    
}

const courses1 = {
        ltc : 'Learn to Code',
        sdeks : 'SDE Kickstart',
        oop : 'OOP',
        sdebc : 'SDE Bootcamp'
}

for (const [key, value] of objects(courses)) {
    console.log(`${key}: ${value}`);
}