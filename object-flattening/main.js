const course = {
    name: 'Introduction to JavaScript',
    isPaid: true,
    cost: {
        anount: 999,
        currency: 'INR'
    }
};

const flattenObject = (object) => {
    let res = {};
    for (const [key, value] of Object.entries(object)) {
        if (typeof value === 'object') {
            for (const [internalKey, intervalValue] of Object.entries(value)) {
                res[key + "." + internalKey] = internalValue;
            }

        } else {
            res[key] = value;
        }
    }
    return res;
}

console.log(flattenObject(course));