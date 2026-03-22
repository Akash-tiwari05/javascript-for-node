

const pr = new Promise(function exec(res, rej){
    console.log('Executor call back triggered by Promise Construcor');
    
    const randomNumber = Math.floor(Math.random()*100);
    if(randomNumber % 2 === 0){
        //rendom is even
        res();
    }else{
        //random is odd
        rej();
    }
});

console.log('Created the Promise object');
console.log(pr);