const obj ={

    firstName:"Rohit",
    greet:function() {
        console.log("Hello, my name is", this.firstName);
    }


}

obj.greet() //Hello, my name is Rohit

//
const obj1 ={
    firstName:"Sanket",
}

obj.greet.call(obj1) //Hello, my name is Sanket

//call method is used to call a function with a given this value and arguments provided individually.

const obj2 ={
    firstName:"Rahul",
    greet:function(wellcomeMessage, promt) {
        console.log("Hello, my name is", this.firstName, wellcomeMessage,promt);
    }
}   

//Hello, my name is Rahul How are you?
obj2.greet("How are you?","How can I help you") 

////Here we are using call method to call the greet function of obj2 with the this value of obj1 and passing the arguments individually.
obj2.greet.call(obj1, "How are you?","How can I help You") 

//here there is no this value and no arguments passed to the greet function so it will return global object which is window in browser and undefined in node.js
obj.greet.call() //

obj.greet.call(null,"How are you?","How can I help you") //
