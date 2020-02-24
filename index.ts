(function() {
    const mainPublisher = new Publisher();

    
})()

interface ISubscriber {
    name: string;
    publisherState: string;
    update();
}

class Publisher {
    private subscribers: Array<ISubscriber> = [];
    private state: string;

    public addSubscriber(subscriber) {
        this.subscribers.push(subscriber);
    }

    public deleteSubscriber(id: string) {

    }
}

class Subscriber implements ISubscriber {
    name;
    publisherState: string;
    constructor(name) {
        this.name = name;
    }
    update() {

    }
}