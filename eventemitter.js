class EventEmitter {
    constructor() {
        this.events = Object.create({});
    }

    on(eventName, ...callbacks) {
        if (!callbacks) {
            (this.events[eventName] = []);
            
            return;
        }

        this.events[eventName] = [...callbacks];
    }

}
