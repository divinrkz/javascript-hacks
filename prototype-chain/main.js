const course = {
    status: 'active',
    mode: 'self paced'
};

const learnToCode = {
    name: 'Learn to code',
    price: '699',
    language: 'C/C++'
}

learnToCode.__proto__ = course;
console.log(learnToCode.name + ", is " + learnToCode.mode);