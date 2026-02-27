let x = 10;

y = {a: 20};

// y ==> ToNumber ==> ToPrimitive ==> "number"
//"number" ==> "[valueOf(),toString()]" ==> y.valueOf --> y !== number
//y.toString ==> [object,Object] !== string
//y --> NaN 
//number - NaN ==> NaN
console.log(x - y); //output NaN


y.toString = function(){
    return "99";
}

console.log(x - y);//-89

y.valueOf  = function(){
    return '1000';
}

console.log(x - y);//-990


function fun(){
}

fun.toString = function(){
    return "fun"
}

console.log("My function name is "+ fun);
