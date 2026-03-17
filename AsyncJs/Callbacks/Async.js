
function createTime(time, timerId){
    console.log('Creating new timer with timer id',timerId);
    setTimeout(()=>{
        console.log(`TimerId with ${timerId} is done`);
    },time);
    console.log('Successfully created a new timer with timerId',timerId);
}

console.log('Starting the code');

createTime(2000,1);
createTime(0,2);
console.log('Starting the loop');

for (let i = 0; i < 1000000; i++) {
    //something is going on
}

console.log('Loop is done');
console.log('Last line of code is done');

