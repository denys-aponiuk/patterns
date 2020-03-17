(function () {
    var mainPublisher = new Publisher();
    document.getElementById("add-subscriber").addEventListener("click", function () {
        var subscribersBlockElement = document.getElementById("subscribers-list");
        var subscriber = new Subscriber();
        subscribersBlockElement.innerHTML += "<div class=\"subscriber-item\" id=\"" + subscriber.name + "\"></div>";
        mainPublisher.addSubscriber(subscriber);
    });
})();
var Publisher = /** @class */ (function () {
    function Publisher() {
        this.subscribers = [];
    }
    Publisher.prototype.addSubscriber = function (subscriber) {
        this.subscribers.push(subscriber);
    };
    Publisher.prototype.deleteSubscriber = function (id) { };
    return Publisher;
}());
var Subscriber = /** @class */ (function () {
    function Subscriber() {
        this.name = Math.random()
            .toString(36)
            .substring(7);
    }
    Subscriber.prototype.update = function () { };
    return Subscriber;
}());
