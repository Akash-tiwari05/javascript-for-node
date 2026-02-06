//this keyword
//this as a keyword is available t be accessed in any fxn or even outside 
// any fxn and in classes as well.
let obj = {

    x:20,
    y:30,
    fn:function() {
        console.log(this.x,this.y);
        
    }
}
//obj became call site
obj.fn(); //output = 10, 20

let obj2 = {

    x:20,
    y:30,
    z:{
        x:99,
        fun:function() {
        console.log(this.x,this.y);
        }
    }
}
//call site is z here
obj2.z.fun() //output x = 9, y = undefined 

//execption of this keyword is arrow fxn is check this  keyword in lexical order
let obj3 = {

    x:20,
    y:30,
    
    fun:function() {
        const arrow = () =>{
            console.log(this.x,this.y);
        }
        arrow();
    }
    
}

//output is 20,30
obj3.fun();

const obj4 = {
     x: 10, 
     y: 20, 
     fn: () => {
        console.log(this,this.x,this.y);
     }
}

obj4.fn();

//bad code configure
/*let obje = {

    this:"Abc",
    fn:function () {
        console.log(this);
    },
}

console.log(obje);
console.log(obje.this);
*/


