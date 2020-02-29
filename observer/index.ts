(function() {
    const mainPublisher = new Publisher();
  
    document.getElementById("add-subscriber").addEventListener("click", () => {
      const subscribersBlockElement = document.getElementById("subscribers-list");
  
      const subscriber = new Subscriber();
  
      subscribersBlockElement.innerHTML += `<div class="subscriber-item" id="${subscriber.name}"></div>`;
    });
  })();
  
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
  
    public deleteSubscriber(id: string) {}
  }
  
  class Subscriber implements ISubscriber {
    name;
    publisherState: string;
    constructor() {
      this.name = Math.random()
        .toString(36)
        .substring(7);
    }
    update() {}
  }
  