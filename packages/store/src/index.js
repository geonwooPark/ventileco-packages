"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var Store_js_1 = require("./core/Store.js");
var numberStore = new Store_js_1.Store(9);
var objectStore = new Store_js_1.Store({ isOpen: true, count: 3 });
var a = numberStore.getState();
var b = objectStore.getState();
numberStore.setState(100);
objectStore.setState(function (prev) { return (__assign(__assign({}, prev), { isOpen: false, count: 4 })); });
var c = numberStore.getState();
var d = objectStore.getState();
console.log(a);
console.log(b);
console.log(c);
console.log(d);
