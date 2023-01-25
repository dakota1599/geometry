"use strict";
exports.__esModule = true;
exports.Line = void 0;
var Line = /** @class */ (function () {
    function Line(start, end) {
        this.start = start;
        this.end = end;
        this.start.connect(this);
        this.end.connect(this);
        this.slope = (end.y - start.y) / (end.x - start.x);
        this.yInt = start.y - (start.x * this.slope);
        this.length = Math.sqrt(Math.pow(start.x - end.x, 2) + Math.pow(start.y - end.y, 2));
    }
    Line.prototype.toString = function () {
        return "(y = ".concat(this.slope, "x + ").concat(this.yInt, ") | Length: ").concat(this.length);
    };
    return Line;
}());
exports.Line = Line;
