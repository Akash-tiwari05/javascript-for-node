class Event{

    bookEvent(){
        console.log("Event Booked");
    }
}


class Movie extends Event{

    showTime(){
        console.log("Movie Show Time");
    }
}

class Concert extends Event{

    bookConcert(){
        console.log("Concert Booked");
    }
}

/*
In the above code, we have created a parent class called Event and 
three child classes called Movie, Concert and Comedy. 
The child classes inherit the properties and methods of the parent class. 
We can create an object of the child class and call the methods of the parent class 
as well as the child class.
*/
class Comedy extends Event{

    bookComedy(){
        console.log("Comedy Booked");
    }
}

//checking the prototype chain
console.log(Movie.prototype.__proto__);


let m = new Movie();
m.showTime();
//calling the method of the parent class using prototype chain
m.bookEvent();