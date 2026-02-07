class Product {
    #name;
    #price;
    #description;

    constructor(builder) {

        console.log("Calling Product constructor");
        

        this.#name = builder.name;

        if (typeof builder.price !== "number" || builder.price <= 0) {
            throw new Error("Price must be a positive number");
        }
        this.#price = builder.price;

        this.#description = builder.description;
    }

    displayProduct(){
        console.log(`Product Name: ${this.#name}`);
        console.log(`Price: ${this.#price}`);
        console.log(`Description: ${this.#description}`);
    }

    static get Builder () {
        return class {
            constructor() {
                this.name = "";
                this.price = 0;
                this.description = "";
            }

            setName(incomingName) {
                this.name = incomingName;
                return this;
            }

            setPrice(incomingPrice) {
                this.price = incomingPrice;
                return this;
            }

            setDescription(incomingDescription) {
                this.description = incomingDescription;
                return this;
            }

            build() {
                return new Product(this);
            }
        };
    }
}

/*
Product.Builder is a static getter that returns a class definition for the 
builder.
*/

const p = new Product.Builder()
    .setName("Iphone 11")
    .setPrice(30000)
    .setDescription("A premium mobile")
    .build();

console.log(p);
p.displayProduct();
 