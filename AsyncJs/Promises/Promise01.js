//promise constructor
//res -> resolver, rej -> rejector
const pr = new Promise((res, rej) => {
    console.log('Executor call back triggered by Promise Construcor');
    for (let i = 0; i < 10000000; i++) {
        //some work on progress
    }
});

console.log('Created the Promise object');
console.log(pr);