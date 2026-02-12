const product = {
    name: "IPhone 14 Pro",
    price: 999,
    category: "Electronics",
};


//object destructuring
/*
in javascript, object destructuring is a convenient way to extract values from objects and assign them to variables. It allows you to unpack properties from an object into distinct variables in a concise syntax.
*/
const { name, price, category } = product;
console.log(name); // IPhone 14 Pro
console.log(price); // 999
console.log(category); // Electronics

//object destructuring with renaming
const{name:productName,price:productPrice} = product;

console.log(productName); // IPhone 14 Pro
console.log(productPrice); // 999

//object destructuring with default values
const { name: productName2, price: productPrice2, description = "No description available" } = product;
console.log(productName2); // IPhone 14 Pro
console.log(productPrice2); // 999
console.log(description); // No description available   