class Product {

    //data members
    static x = 10;
    
    //constructor
    constructor(productName,productPrice){
        console.log("Constructor called");
        this.name = productName
        this.price = productPrice
        console.log(Product.x);
        
    }
    /*
    displayProduct(){
        console.log("Product Display",this.name,this.price,this.rating);  
    }
     */

}

let p1 = new Product("Iphone", 34000);
console.log(p1);
console.log(p1.x); // output is undfined because x belong to class not object

console.log(Product.x); //output 10 , x is assosiated with class during runtime


