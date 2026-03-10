//this is very famous interview question that ask in many frontend interviews

for (var i = 0; i < 3; i++) {
    setTimeout(function f() {
        console.log(i);
        
    },3000);
}

//output 3, 3, 3

for (let i = 0; i < 5; i++) {
    setTimeout(function g() {
        console.log(i);
        
    },2000);
}

//output 0, 1, 2,4,5