"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

(function () {
  var mainPublisher = new Publisher();
  var buttonForAdding = document.getElementById('add-subscriber');

  if (buttonForAdding) {
    buttonForAdding.addEventListener("click", function () {
      var subscribersBlockElement = document.getElementById("subscribers-list");
      var subscriber = new Subscriber();

      if (subscribersBlockElement) {
        subscribersBlockElement.innerHTML += "<div class=\"subscriber-item\" id=\"".concat(subscriber.name, "\"></div>");
      }

      mainPublisher.addSubscriber(subscriber);
    });
  }
})();

var Publisher = /*#__PURE__*/function () {
  function Publisher() {
    _classCallCheck(this, Publisher);

    _defineProperty(this, "subscribers", []);
  }

  _createClass(Publisher, [{
    key: "addSubscriber",
    // private state: string;
    value: function addSubscriber(subscriber) {
      this.subscribers.push(subscriber);
    }
  }, {
    key: "deleteSubscriber",
    value: function deleteSubscriber(id) {}
  }]);

  return Publisher;
}();

var Subscriber = /*#__PURE__*/function () {
  function Subscriber() {
    _classCallCheck(this, Subscriber);

    _defineProperty(this, "name", void 0);

    _defineProperty(this, "publisherState", 'initial');

    this.name = Math.random().toString(36).substring(7);
  }

  _createClass(Subscriber, [{
    key: "update",
    value: function update() {
      console.log(1);
    }
  }]);

  return Subscriber;
}(); // export interface Props {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vYnNlcnZlci9pbmRleC50cyJdLCJuYW1lcyI6WyJtYWluUHVibGlzaGVyIiwiUHVibGlzaGVyIiwiYnV0dG9uRm9yQWRkaW5nIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdWJzY3JpYmVyc0Jsb2NrRWxlbWVudCIsInN1YnNjcmliZXIiLCJTdWJzY3JpYmVyIiwiaW5uZXJIVE1MIiwibmFtZSIsImFkZFN1YnNjcmliZXIiLCJzdWJzY3JpYmVycyIsInB1c2giLCJpZCIsIk1hdGgiLCJyYW5kb20iLCJ0b1N0cmluZyIsInN1YnN0cmluZyIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxDQUFDLFlBQVc7QUFDUixNQUFNQSxhQUFhLEdBQUcsSUFBSUMsU0FBSixFQUF0QjtBQUVBLE1BQU1DLGVBQWUsR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLGdCQUF4QixDQUF4Qjs7QUFDQSxNQUFJRixlQUFKLEVBQXFCO0FBQ25CQSxJQUFBQSxlQUFlLENBQUNHLGdCQUFoQixDQUFpQyxPQUFqQyxFQUEwQyxZQUFNO0FBQzlDLFVBQU1DLHVCQUF1QixHQUFHSCxRQUFRLENBQUNDLGNBQVQsQ0FBd0Isa0JBQXhCLENBQWhDO0FBRUEsVUFBTUcsVUFBVSxHQUFHLElBQUlDLFVBQUosRUFBbkI7O0FBRUEsVUFBSUYsdUJBQUosRUFBNkI7QUFDM0JBLFFBQUFBLHVCQUF1QixDQUFDRyxTQUF4QixrREFBeUVGLFVBQVUsQ0FBQ0csSUFBcEY7QUFDRDs7QUFFRFYsTUFBQUEsYUFBYSxDQUFDVyxhQUFkLENBQTRCSixVQUE1QjtBQUNELEtBVkQ7QUFXRDtBQUNGLENBakJIOztJQXlCUU4sUzs7Ozt5Q0FDc0MsRTs7Ozs7QUFDMUM7a0NBRXFCTSxVLEVBQStCO0FBQ2xELFdBQUtLLFdBQUwsQ0FBaUJDLElBQWpCLENBQXNCTixVQUF0QjtBQUNEOzs7cUNBRXVCTyxFLEVBQVksQ0FBRTs7Ozs7O0lBR2xDTixVO0FBR0osd0JBQWM7QUFBQTs7QUFBQTs7QUFBQSw0Q0FEVyxTQUNYOztBQUNaLFNBQUtFLElBQUwsR0FBWUssSUFBSSxDQUFDQyxNQUFMLEdBQ1RDLFFBRFMsQ0FDQSxFQURBLEVBRVRDLFNBRlMsQ0FFQyxDQUZELENBQVo7QUFHRDs7Ozs2QkFDYTtBQUNaQyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxDQUFaO0FBQ0Q7Ozs7S0FHTDtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IG1haW5QdWJsaXNoZXIgPSBuZXcgUHVibGlzaGVyKCk7XG4gIFxuICAgIGNvbnN0IGJ1dHRvbkZvckFkZGluZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtc3Vic2NyaWJlcicpO1xuICAgIGlmIChidXR0b25Gb3JBZGRpbmcpIHtcbiAgICAgIGJ1dHRvbkZvckFkZGluZy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjb25zdCBzdWJzY3JpYmVyc0Jsb2NrRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3Vic2NyaWJlcnMtbGlzdFwiKTtcbiAgICBcbiAgICAgICAgY29uc3Qgc3Vic2NyaWJlciA9IG5ldyBTdWJzY3JpYmVyKCk7XG5cbiAgICAgICAgaWYgKHN1YnNjcmliZXJzQmxvY2tFbGVtZW50KSB7XG4gICAgICAgICAgc3Vic2NyaWJlcnNCbG9ja0VsZW1lbnQuaW5uZXJIVE1MICs9IGA8ZGl2IGNsYXNzPVwic3Vic2NyaWJlci1pdGVtXCIgaWQ9XCIke3N1YnNjcmliZXIubmFtZX1cIj48L2Rpdj5gO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIG1haW5QdWJsaXNoZXIuYWRkU3Vic2NyaWJlcihzdWJzY3JpYmVyKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSkoKTtcbiAgXG4gIGludGVyZmFjZSBpU3Vic2NyaWJlciB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIHB1Ymxpc2hlclN0YXRlOiBzdHJpbmc7XG4gICAgdXBkYXRlKCk6ICgpID0+IHZvaWQ7XG4gIH1cbiAgXG4gIGNsYXNzIFB1Ymxpc2hlciB7XG4gICAgcHJpdmF0ZSBzdWJzY3JpYmVyczogQXJyYXk8aVN1YnNjcmliZXI+ID0gW107XG4gICAgLy8gcHJpdmF0ZSBzdGF0ZTogc3RyaW5nO1xuICBcbiAgICBwdWJsaWMgYWRkU3Vic2NyaWJlcihzdWJzY3JpYmVyOiBpU3Vic2NyaWJlcik6IHZvaWQge1xuICAgICAgdGhpcy5zdWJzY3JpYmVycy5wdXNoKHN1YnNjcmliZXIpO1xuICAgIH1cbiAgXG4gICAgcHVibGljIGRlbGV0ZVN1YnNjcmliZXIoaWQ6IHN0cmluZykge31cbiAgfVxuICBcbiAgY2xhc3MgU3Vic2NyaWJlciBpbXBsZW1lbnRzIGlTdWJzY3JpYmVyIHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgcHVibGlzaGVyU3RhdGU6IHN0cmluZyA9ICdpbml0aWFsJztcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHRoaXMubmFtZSA9IE1hdGgucmFuZG9tKClcbiAgICAgICAgLnRvU3RyaW5nKDM2KVxuICAgICAgICAuc3Vic3RyaW5nKDcpO1xuICAgIH1cbiAgICB1cGRhdGUoKTogYW55IHtcbiAgICAgIGNvbnNvbGUubG9nKDEpXG4gICAgfVxuICB9XG5cbi8vIGV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xuLy8gICB4OiBudW1iZXI7XG4vLyAgIHk6IG51bWJlcjtcbi8vIH1cblxuLy8gZXhwb3J0IGNsYXNzIFZhbHVlIHtcbi8vICAgcHJpdmF0ZSB2YWx1ZSA9IDEwXG4vLyAgIHByaXZhdGUgcHJvcHM6IFByb3BzID0geyB4OiAwLCB5OiAwIH07XG5cbi8vICAgZ2V0VmFsdWUoKTogbnVtYmVyIHtcbi8vICAgICByZXR1cm4gdGhpcy52YWx1ZTtcbi8vICAgfVxuXG4vLyAgIHNldFZhbHVlKHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcbi8vICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4vLyAgIH1cblxuLy8gICBzZXRQcm9wcyhwcm9wczogUHJvcHMpIHtcbi8vICAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4vLyAgIH1cblxuLy8gICBnZXRQcm9wcygpOiBQcm9wcyB7XG4vLyAgICAgcmV0dXJuIHRoaXMucHJvcHM7XG4vLyAgIH1cbi8vIH1cblxuLy8gY29uc3QgdmFsdWUgPSBuZXcgVmFsdWUoKTtcbi8vIHZhbHVlLnNldFZhbHVlKDEwMDApO1xuLy8gdmFsdWUuZ2V0VmFsdWUoKTtcblxuLy8gY29uc3QgdmFsdWUxID0gbmV3IFZhbHVlKClcbi8vIHZhbHVlMS5zZXRQcm9wcyh7IHg6IDEwMDAsIHk6IDEwMDAgfSk7XG4vLyB2YWx1ZTEuZ2V0UHJvcHMoKTtcbiAgIl19