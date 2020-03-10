var Publisher = /** @class */ (function () {
    function Publisher() {
        this.subscribers = [];
    }
    // private state: string;
    Publisher.prototype.addSubscriber = function (subscriber) {
        this.subscribers.push(subscriber);
    };
    Publisher.prototype.deleteSubscriber = function (id) { };
    return Publisher;
}());
var Subscriber = /** @class */ (function () {
    function Subscriber() {
        this.publisherState = 'initial';
        this.name = Math.random()
            .toString(36)
            .substring(7);
    }
    Subscriber.prototype.update = function () {
        console.log(1);
    };
    return Subscriber;
}());
(function () {
    var mainPublisher = new Publisher();
    var buttonForAdding = document.getElementById('add-subscriber');
    if (buttonForAdding) {
        buttonForAdding.addEventListener("click", function () {
            var subscribersBlockElement = document.getElementById("subscribers-list");
            var subscriber = new Subscriber();
            if (subscribersBlockElement) {
                subscribersBlockElement.innerHTML += "<div class=\"subscriber-item\" id=\"" + subscriber.name + "\"></div>";
            }
            mainPublisher.addSubscriber(subscriber);
        });
    }
})();
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
