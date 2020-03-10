"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var maxRecursion = 20;
function isArray(arr) {
    return Object.prototype.toString.call(arr) === '[object Array]';
}
var ERROR_RECURSION = 'Maximum recursion at ';
var ERROR_REGISTRATION = 'Already registered.';
var ERROR_ARRAY = 'Must pass array.';
var ERROR_FUNCTION = 'Must pass function to invoke.';
var ERROR_SERVICE = 'Service does not exist.';
var JsInject = /** @class */ (function () {
    function JsInject() {
        var _this = this;
        this.container = {};
        this.container['$$jsInject'] = function () { return _this; };
    }
    JsInject.prototype.get = function (name, level) {
        var wrapper = this.container[name], lvl = level || 0;
        if (wrapper) {
            return wrapper(lvl);
        }
        throw ERROR_SERVICE;
    };
    JsInject.prototype.invoke = function (fn, deps, instance, level) {
        var i = 0, args = [], lvl = level || 0;
        if (lvl > maxRecursion) {
            throw ERROR_RECURSION + lvl;
        }
        for (; i < deps.length; i += 1) {
            args.push(this.get(deps[i], lvl + 1));
        }
        return fn.apply(instance, args);
    };
    JsInject.prototype.register = function (name, annotatedArray) {
        var _this = this;
        if (!isArray(annotatedArray)) {
            throw ERROR_ARRAY;
        }
        if (this.container[name]) {
            throw ERROR_REGISTRATION;
        }
        if (typeof annotatedArray[annotatedArray.length - 1] !== 'function') {
            throw ERROR_FUNCTION;
        }
        this.container[name] = function (level) {
            var lvl = level || 0, Template = function () { }, result = {}, instance, fn = annotatedArray[annotatedArray.length - 1], deps = annotatedArray.length === 1 ? (annotatedArray[0].$$deps || []) :
                annotatedArray.slice(0, annotatedArray.length - 1), injected;
            Template.prototype = fn.prototype;
            instance = new Template(),
                injected = _this.invoke(fn, deps, instance, lvl + 1);
            result = injected || instance;
            _this.container[name] = function () { return result; };
            return result;
        };
    };
    return JsInject;
}());
exports.JsInject = JsInject;
