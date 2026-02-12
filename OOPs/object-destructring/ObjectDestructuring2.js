const product = {
    name: "IPhone 14 Pro",
    price: 999,
    category: "Electronics",
};



const purchesdProduct = {orderId: "12345", orderDate:"02/12/2026" ,...product};
console.log(purchesdProduct);
/*
In this example, we have an object called product with properties name, price, and category. We then create a new object called purchesdProduct that combines the properties of the product object with additional properties orderId and orderDate using the spread operator (...). The resulting purchesdProduct object contains all the properties from the product object along with the new properties we added.
*/

const updatedProduct = {...product, price: 899};
console.log(updatedProduct);
/*
In this example, we create a new object called updatedProduct by spreading the properties of the product object and then overriding the price property with a new value of 899. The resulting updatedProduct object contains all the properties from the original product object, but with the price property updated to the new value.
*/ 
