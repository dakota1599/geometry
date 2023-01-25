"use strict";
exports.__esModule = true;
exports.Object = void 0;
var Object = /** @class */ (function () {
    function Object(points) {
        this.points = points;
    }
    Object.prototype.sort = function (compareFn) {
        if (compareFn) {
            return this.points.sort(compareFn);
        }
        return this.points.sort();
    };
    return Object;
}());
exports.Object = Object;
