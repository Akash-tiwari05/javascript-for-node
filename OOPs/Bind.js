const obj ={

    firstName:"Rohit",
    greet:function(wellcomeMessage, prompt) {
        console.log("Hello, my name is", this.firstName,wellcomeMessage,prompt);
    } 
}

obj.greet() //Hello, my name is Rohit

const obj1 ={
    firstName:"Sanket",
}


//bind() method returns a new function, that, 
// when called, has its this keyword set to the provided value, 
// with a given sequence of arguments preceding any provided when 
// the new function is called.
f= obj.greet.bind(obj1)
f("How are you?","How can I help you") 
//Hello, my name is Sanket How are you? How can I help you



//this funtion help arrow function to access the this keyword of the parent scope
const newObj ={

    firstName:"Rohit",
    greet:function() {
        const self = this; // Store the reference to the current object
        const arrowFunction = () => {  
            console.log("Hello, my name is", self.firstName);
        }
        arrowFunction()
    } 
}

newObj.greet() //Hello, my name is Rohit

f= newObj.greet.bind({firstName:"Sanket"})() //Hello, my name is Rohit
