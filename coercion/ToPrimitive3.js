//best use case of toString and ValueOf()

class Product{

    constructor(n, p){
        this.name = n;
        this.price = p;
    }

    valueOf(){
        return this.p; //p here is not derived is undefined
    }
}


let p = new Product("Apple",980);

console.log(p);


console.log(10 - p);// p.valueOf() --> undefine --> ToNumber --> NaN
//output = NaN

class Product2{

    constructor(n, p){
        this.name = n;
        this.price = p;
    }
    valueOf(){
        return this.price; //price is derived to number
    }
}

let p1 = new Product2("Apple",980);

console.log(p1);


console.log(10 - p1);// p.valueOf() --> price
//output = -980

let p2 = new Product2("Apple",990);
console.log(p1 < p2);//true

console.log(p1 - p2);//-10
