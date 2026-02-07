class Product{

    constructor(builder){
        this.name = builder.name

        //validation
        if(builder.price >0 && typeof(builder.price) === "number"){
            this.price = builder.price;
        }
        else{
            return null;
        }
        //this.price = builder.price
        //this.category = builder.category
        //this.rating = builder.rating
        this.description = builder.description

    }
}

const p = new Product({
    name: "Iphone 11",
    price:30000,
    description:"A premium mobile",

});