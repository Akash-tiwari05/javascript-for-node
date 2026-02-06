//class is a blueprint for creating objects. It defines the properties 
// and methods that an object can have.
class Product {

    //data members
    //no var, let or const keyword is used to define a data member in a class
    name;
    price;
    category;
    rating;
    description;
    
    //constructor
    constructor(productName,productPrice, productCategory, productRating,
        productDescription){
        console.log("Constructor called");
        this.name = productName
        this.price = productPrice
        this.category = productCategory
        this.rating = productRating
        this.description = productDescription 
    }


    //member functions or methods
    //no funtion keyword is used to define a method in a class
    addToCart() {
        console.log(this.name,"added to cart with the price of",this.price);
    }

    productRatings(){
        console.log(this.name,"is rating of",this.rating);
        
    }

    removeFromCart() {
        console.log(this.name,"removed from cart");
    }

    displayProductDetails() {
        console.log("Displaying product details:",this.description);
    }

    buyProduct() {
        console.log(this.name,"purchased");
    }

}

//creating object of the class
let laptop = new Product();
//console.log(typeof(Product));



//assigning values to the data members
laptop.name = "Laptop";
laptop.category = "Electronics";
laptop.description = "A high performance laptop";
//calling methods of the class
laptop.addToCart();
laptop.displayProductDetails();
laptop.buyProduct();
//laptop.productRating();


let iphone = new Product("Iphone 17",130000,"Mobile",4.5,"A premium mobile");
iphone.displayProductDetails()
iphone.productRatings()
iphone.addToCart()
iphone.buyProduct()
iphone.removeFromCart()


console.log(iphone)
