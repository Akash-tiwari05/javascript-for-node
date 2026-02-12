const product = {
    name: "IPhone 14 Pro",
    price: 999,

    //nested object
    category:{
        name: "Electronics",
        categoryId: 12345,
    },
};

//unpack the nested object
const {category: {categoryId}} = product;
console.log(categoryId);

//spread operator act as a rest parameter and un pack all the data in new
//object with price data member
const {price, ...productWithOutPrice} = product;
console.log(productWithOutPrice);
