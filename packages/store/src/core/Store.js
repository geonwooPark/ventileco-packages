"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Store = void 0;
var Observable_1 = require("../react/Observable");
var Store = /** @class */ (function (_super) {
    __extends(Store, _super);
    function Store(initialState) {
        var _this = _super.call(this) || this;
        _this.state = initialState;
        return _this;
    }
    Store.prototype.getState = function () {
        return this.state;
    };
    Store.prototype.setState = function (updater) {
        var newState = typeof updater === 'function'
            ? updater(this.state)
            : updater;
        // 상태를 전체를 교체할지? 일부만 변경할지?
        this.state = newState;
        this.notify(newState);
    };
    return Store;
}(Observable_1.Observable));
exports.Store = Store;
