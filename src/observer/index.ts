(function() {
    const mainPublisher = new Publisher();
  
    const buttonForAdding = document.getElementById('add-subscriber');
    if (buttonForAdding) {
      buttonForAdding.addEventListener("click", () => {
        const subscribersBlockElement = document.getElementById("subscribers-list");
    
        const subscriber = new Subscriber();

        if (subscribersBlockElement) {
          subscribersBlockElement.innerHTML += `<div class="subscriber-item" id="${subscriber.name}"></div>`;
        }
    
        mainPublisher.addSubscriber(subscriber);
      });
    }
  })();
  
  interface iSubscriber {
    name: string;
    publisherState: string;
    update(): () => void;
  }
  
  class Publisher {
    private subscribers: Array<iSubscriber> = [];
    // private state: string;
  
    public addSubscriber(subscriber: iSubscriber): void {
      this.subscribers.push(subscriber);
    }
  
    public deleteSubscriber(id: string) {}
  }
  
  class Subscriber implements iSubscriber {
    name: string;
    publisherState: string = 'initial';
    constructor() {
      this.name = Math.random()
        .toString(36)
        .substring(7);
    }
    update(): any {
      console.log(1)
    }
  }

// export interface Props {
//   x: number;
//   y: number;
// }

// export class Value {
//   private value = 10
//   private props: Props = { x: 0, y: 0 };

//   getValue(): number {
//     return this.value;
//   }

//   setValue(value: number): void {
//     this.value = value;
//   }

//   setProps(props: Props) {
//     this.props = props;
//   }

//   getProps(): Props {
//     return this.props;
//   }
// }

// const value = new Value();
// value.setValue(1000);
// value.getValue();

// const value1 = new Value()
// value1.setProps({ x: 1000, y: 1000 });
// value1.getProps();
  