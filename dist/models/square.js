"use strict";
exports.__esModule = true;
exports.Square = void 0;
var _1 = require("./");
var Square = /** @class */ (function () {
    function Square(startPoint, sideLength) {
        this.p1 = startPoint;
        this.p2 = new _1.Point(this.p1.x, this.p1.y + sideLength);
        this.p3 = new _1.Point(this.p1.x + sideLength, this.p1.y);
        this.p4 = new _1.Point(this.p1.x + sideLength, this.p1.y + sideLength);
        this.l1 = new _1.Line(this.p1, this.p2);
        this.l2 = new _1.Line(this.p2, this.p3);
        this.l3 = new _1.Line(this.p3, this.p4);
        this.l4 = new _1.Line(this.p4, this.p1);
        this.area = sideLength * sideLength;
        this.perimeter = sideLength * 4;
    }
    Square.prototype.toString = function () {
        return "".concat(this.p1, " ").concat(this.p2, " ").concat(this.p3, " ").concat(this.p4, " | Area: ").concat(this.area, ", Permimeter: ").concat(this.perimeter);
    };
    return Square;
}());
exports.Square = Square;
