class Product {

    //data members
    //use # to make them private
    #name;
    #price;
    rating;
    
    //constructor
    constructor(productName,productPrice, productRating){
        console.log("Constructor called");
        this.#name = productName
        this.#price = productPrice
        this.rating = productRating
    }


    //member functions or methods
    //no funtion keyword is used to define a method in a class
    addToCart() {
        console.log(this.#name,"added to cart with the price of",this.#price);
    }

    displayProduct(){
        console.log("Product Display",this.#name,this.#price,this.rating);
        
    }

    displayPrice(){
        console.log("Price of the product:",this.#price);
        
    }

    //setter
    set price(p){
        if(p >0){
            this.#price = p;
        }
        else{
            console.log("Invalid Price");   
        }
    }

    //getter
    get price(){
        return this.#price
    }

    productRatings(){
        console.log(this.#name,"is rating of",this.rating);
        
    }
}

let iphone = new Product("Iphone 17",130000,4.5); 

iphone.productRatings()
iphone.addToCart()
iphone.displayProduct()
//create new key with name it not coside with #name
iphone.name = "something"
//this is compile time error for java script
//this private data member can't be access out side of the block
//iphone.#name = "Infinx"
console.log(iphone)

//this getter and setter which help us to write validation logic so no one can 
//alocate the random value to our data member

iphone.price =57000 //calls the setter method
console.log(iphone.price); //calls the getter method

iphone.displayPrice()
iphone.displayProduct()