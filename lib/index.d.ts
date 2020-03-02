interface iSubscriber {
    name: string;
    publisherState: string;
    update(): () => void;
}
declare class Publisher {
    private subscribers;
    addSubscriber(subscriber: iSubscriber): void;
    deleteSubscriber(id: string): void;
}
declare class Subscriber implements iSubscriber {
    name: string;
    publisherState: string;
    constructor();
    update(): any;
}
