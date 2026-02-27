
//1 < 2 < 3 ---> (1 < 2) < 3 ---> true < 3
//true use ToNumber true ---> 1(becomes)
//1 < 3 --- true

console.log(1 < 2 < 3); //true


//3 > 2 > 1 ---> (3 > 2) > 1 ---> true > 1
//true use ToNumber true ---> 1(becomes)
//1 > 1 ---> false

console.log(3 > 2 > 1); //false

console.log(3 > 2 >= 1);// true


s = "123"
console.log("string",s);

console.log(+s);
console.log(!!s);

x = 0;
console.log(x === -0);
console.log(x == -0);


y = -0;
console.log(y.toString());
console.log(Object.is(y, -0));
