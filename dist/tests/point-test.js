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
exports.__esModule = true;
var models_1 = require("../models");
var test_1 = require("./test");
var PointTest = /** @class */ (function (_super) {
    __extends(PointTest, _super);
    function PointTest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PointTest.prototype.run = function () {
        throw new Error("Method not implemented.");
    };
    PointTest.createPoint = function (x, y) {
        return new models_1.Point(x, y);
    };
    return PointTest;
}(test_1.Test));
exports["default"] = PointTest;
