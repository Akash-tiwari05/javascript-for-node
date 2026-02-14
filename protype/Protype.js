class Product{

    constructor(n){
        this.name = n;
    }

    display(){
        console.log("Product Name:");
    }
}

let p = new Product("Iphone 17");

console.log(p)
p.display() 
console.log(p.prototype) //undefined;

//prototype is the property of the constructor function and it is used to add methods to the constructor function
console.log(p.__proto__) //{constructor: ƒ, display: ƒ}


function Product1(n){
    this.name = n;

    this.display = function(){
        console.log("Product Name:",this);
    }

}   

let p1 = new Product1("Iphone 17");

console.log(p1)
p1.display() 
console.log(p1.prototype) //undefined;
console.log(p1.__proto__) //{constructor: ƒ, display: ƒ}