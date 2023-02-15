function Stopwatch() {
    let startTime, endTime, running, counter = 0; // initially duration is zero

    this.start = function () {
        if (running) 
            throw new Error("stop watch is already running ");
        
        running = true;
        startTime = new Date();
    };
    this.stop = function () {
        if (!running) 
            throw new Error("stop watch is not started ");
        
        running = false;
        endTime = new Date();
        const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
        counter += seconds

    };
    this.reset = function () {
        startTime = null;
        endTime = null;
        running = false;
        counter = 0
    }
    Object.defineProperty(this, 'duration', {
        get: function () {
            return counter
        }
    })
}

const sw = new Stopwatch;

console.log(sw.start());

console.log(sw.stop())
console.log(sw.duration)
// sw.reset()


