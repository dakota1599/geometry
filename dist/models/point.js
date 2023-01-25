"use strict";
exports.__esModule = true;
exports.Point = void 0;
// Represents a two dimensional point on a grid.
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
        this.connections = [];
    }
    Point.prototype.toString = function () {
        return "(".concat(this.x, ", ").concat(this.y, ")");
    };
    Point.prototype.connect = function (line) {
        if (this.connections.lastIndexOf(line) > -1)
            return;
        this.connections.push(line);
    };
    Point.prototype.disconnect = function (line) {
        var id = this.connections.lastIndexOf(line);
        if (id < 0)
            return;
        this.connections.splice(id, 1);
    };
    Point.add = function (x, y) {
        return new Point(x.x + y.x, x.y + y.y);
    };
    Point.subtract = function (x, y) {
        return new Point(x.x - y.x, x.y - y.y);
    };
    return Point;
}());
exports.Point = Point;
