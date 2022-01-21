function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Resolved');
        }, 2000);
    })
}

async function asyncCall() {
    const result = await resolveAfter2Seconds();
    console.log(result);
}


asyncCall(); // Calling the async function asyncCall() will output 'Resolved' after 2 seconds.