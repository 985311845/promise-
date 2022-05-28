let promise1 = new Promise((resolve, reject) => { resolve('promise1') });
let promsie2 = promise1.then(() => {
    return promsie2
}, (reason => { return reason }))
promsie2.then((value) => {
    console.log(value);
}, reason => {
    console.log(reason)
})

