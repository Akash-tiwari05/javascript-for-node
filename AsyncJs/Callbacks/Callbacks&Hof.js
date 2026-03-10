//callbacks and higher order function(Hof)

//map is Hof beacuse map is function that is accepting another function as an args
//the function which pass by Hof as an args is also known as callbacks
//map --> Hof || f() --> callbacks
//arr.map(function f(){})



function myMap(arr, fn){
    let result = []; //create a new arr to store in result
    for (let i = 0; i < arr.length; i++) {
       result.push(fn(arr[i],i));
    }
    return result;
}

const arr = [1,2,3,4,5];

console.log(myMap(arr,function g(element){
    return element**2;
}));
