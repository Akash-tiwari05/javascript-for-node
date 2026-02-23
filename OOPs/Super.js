class Event{
    constructor(dateOfEvent) {
        this.dateOfEvent = dateOfEvent;
    }

    bookEvent() {
        console.log("Event Booked");
    }
}



class Movie extends Event {
    constructor(name,movieDate) {
        super(movieDate)//inherit properties
        this.name = name;
    }

    showTime() {
        console.log("Movie Show Time", this.dateOfEvent);
        super.bookEvent();
    }
}


let m = new Movie("Inception","2024-07-01");
m.bookEvent();
m.showTime();