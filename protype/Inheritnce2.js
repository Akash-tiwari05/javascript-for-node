//Function Inheritance in JavaScript

//In JavaScript, functions can also inherit properties and methods from other
//  functions. This is achieved through the use of prototypes. 
// When a function is created, it has a prototype property that can be used 
// to add properties and methods that will be inherited by all instances of that 
// function.

function Event(dateOfEvent) {

    this.dateOfEvent = dateOfEvent;
    this.bookEvent = function() {
        console.log("Event Booked");
    }  
}

Event.prototype.bookEvent = function() {
    console.log("Event Booked");
}

function Movie(name) {
    Event.call(this, "2024-07-01")//inherit properties
    this.name = name;
}
//old method + bad practice
//Movie.prototype.__proto__= Event.prototype;

//Inherit prototype methods
Movie.prototype = Object.create(Event.prototype);

Movie.prototype.showTime = function() {
    console.log("Movie Show Time", this.dateOfEvent);
};

const movie1 = new Movie("Inception");
movie1.bookEvent(); //Event Booked
movie1.showTime(); //Movie Show Time 2024-07-01 