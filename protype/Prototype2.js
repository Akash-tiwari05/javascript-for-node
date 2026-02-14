function Product(name) {
    this.name = name;
}

let p = new Product("Iphone 17");
console.log(p);


/*
1. when we create a class in javascript it is just a syntactical 
sugar over the constructor function and prototype.

2. we can add methods to the prototype of the constructor function

3. this is now change the blueprint of the object and all the objects 
created from the constructor function will have access to the method a
dded to the prototype
*/
Product.prototype.display = function() {
    console.log("Product Name:", this.name);
}

//now we can call the display method on the object p
p.display() //Product Name: Iphone 17
