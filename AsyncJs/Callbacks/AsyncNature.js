
//here setTimeout is not exactly js features
//its actually the features of run time env such as browser or node
//so the node/browser handle the execution of this code and its not related to js 
setTimeout(function f(){
    console.log("End");
},10);

console.log("Set TimeOut");

setTimeout(function g() {
        console.log("Hello");
},0);

let x = 0;

for(let i = 0; i < 1000000000; i++){
    x = x+i;
}
console.log(x);

x = 0;
for(let i = 0; i < 1000000000; i++){
    x = x+i;
}

console.log("Timeout end"); 


//output - because event loop prioriitize js main thread
/*
Set TimeOut
499999999067109000
Timeout end
Hello
End
*/