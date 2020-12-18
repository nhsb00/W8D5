
class Clock {
    constructor() {
        // 1. Create a Date object.
        const date = new Date();

        // 2. Store the hours, minutes, and seconds.
        this.hours = date.getHours();
        this.minutes = date.getMinutes();
        this.seconds = date.getSeconds();

        // 3. Call printTime.
        this.printTime()

        // 4. Schedule the tick at 1 second intervals.
        setInterval(this._tick, 1000)
    }

    printTime() {
        // Format the time in HH:MM:SS
        // Use console.log to print it.
        console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
    }

    _tick() {
        // 1. Increment the time by one second.
        this.incrementSeconds();

        // 2. Call printTime.
        this.printTime();
    }

    incrementSeconds() {
        this.seconds += 1;
        if (this.seconds === 60) {
            this.seconds = 0;
            this.incrementMinutes();
        }
    }

    incrementMinutes() {
        this.minutes += 1;
        if (this.minutes === 60) {
            this.minutes = 0;
            this.incrementHours();
        }
    }
    incrementHours() {
        this.hours += 1;
        if (this.hours === 24) {
            this.hours = 0;
        }
    }

}

const clock = new Clock();