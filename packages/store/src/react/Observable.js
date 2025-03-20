"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Observable = void 0;
var Observable = /** @class */ (function () {
    function Observable() {
        this.callbacks = new Set();
    }
    Observable.prototype.subscribe = function (callback) {
        var _this = this;
        this.callbacks.add(callback);
        return function () {
            _this.callbacks.delete(callback);
        };
    };
    Observable.prototype.notify = function (state) {
        this.callbacks.forEach(function (cb) { return cb(state); });
    };
    return Observable;
}());
exports.Observable = Observable;
