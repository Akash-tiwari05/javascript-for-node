// all the falsy value
console.log("0 == false ==>",0 == false);

//return false NaN is not equal to any one
console.log(Nan == false);
if(!NaN){
    console.log("NaN is false ==>",true);
}

console.log("-0 == false ==>",-0 == false);

let x;
// return false because x is undefined and it is not equal to any one 
console.log(x == false);
if(!x){
    console.log("undefined is false ==>",true);
}

//return false
console.log(nul == false);

if(!null){
    console.log("null is false ==>",true);
}
console.log(`"" == false ==>`,"" == false);
console.log("false == false ==>",false == false);

console.log("-".repeat(30));


//if we use not operator then all truthy value return false and vice versa
console.log(!3);
console.log(!"A");
console.log(!Object);