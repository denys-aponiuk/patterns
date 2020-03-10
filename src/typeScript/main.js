"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsInject_1 = require("./jsInject");
var jsInject = new jsInject_1.JsInject();
var Roof = /** @class */ (function () {
    function Roof() {
    }
    Roof.prototype.action = function () {
        console.log('Roof was created');
    };
    return Roof;
}());
jsInject.register('roof', [Roof]);
var Bricks = /** @class */ (function () {
    function Bricks() {
    }
    Bricks.prototype.action = function () {
        console.log('Bricks were created');
    };
    return Bricks;
}());
jsInject.register('bricks', [Bricks]);
var Walls = /** @class */ (function () {
    function Walls(Bricks) {
        this.bricks = Bricks;
    }
    Walls.prototype.action = function () {
        this.bricks.action();
        console.log('Walls were created');
    };
    return Walls;
}());
jsInject.register('walls', ['bricks', Walls]);
var House = /** @class */ (function () {
    function House(Roof, Walls) {
        this.roof = Roof;
        this.walls = Walls;
    }
    House.prototype.action = function () {
        this.roof.action();
        this.walls.action();
        console.log('House were created');
    };
    return House;
}());
jsInject.register('house', ['walls', 'roof', House]);
var house = jsInject.get('house');
house.action();
