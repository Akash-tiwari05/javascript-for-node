const obj ={

    firstName:"Rohit",
    greet:function(wellcomeMessage, prompt) {
        console.log("Hello, my name is", this.firstName,wellcomeMessage,prompt);
    } 
}

obj.greet() //Hello, my name is Rohit

//
const obj1 ={
    firstName:"Sanket",
}

obj.greet.apply(obj1,["How are you?","How can I help you"])