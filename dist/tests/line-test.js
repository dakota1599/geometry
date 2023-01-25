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
var LineTest = /** @class */ (function (_super) {
    __extends(LineTest, _super);
    function LineTest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LineTest.prototype.run = function () {
        throw new Error("Method not implemented.");
    };
    LineTest.createLine = function (start, end) {
        return new models_1.Line(start, end);
    };
    return LineTest;
}(test_1.Test));
exports["default"] = LineTest;
