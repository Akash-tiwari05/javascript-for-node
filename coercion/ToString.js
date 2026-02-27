x= {}
// default imple of toString() [object,object]
console.log(x.toString());

y = {a:10};

console.log(y.toString());
console.log(y.valueOf());

z ={
    a:10, 
    b:20, 
    toString : function(){
        return "my to string";
    }
};

console.log("-".repeat(50));

console.log(z);

console.log(z.toString());

console.log(z.valueOf());


