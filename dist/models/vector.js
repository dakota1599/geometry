"use strict";
exports.__esModule = true;
exports.Vector = void 0;
// A Vector represents a point in "n" dimensional space.
// This class provides calculation methods for vectors.
var Vector = /** @class */ (function () {
    function Vector(vector) {
        this.vector = vector;
    }
    // Nonstatic functions
    // --------------------------------------------------
    Vector.prototype.toString = function () {
        var result = "(";
        for (var i = 0; i < this.vector.length; i++) {
            result += "".concat(this.vector[i]);
            if (i + 1 == this.vector.length) {
                result += ")";
                return result;
            }
            result += ", ";
        }
    };
    Vector.prototype.scale = function (val) {
        this.vector = this.vector.map(function (vec) { return vec * val; });
        return this;
    };
    Vector.prototype.add = function (v) {
        Vector.validateDimension(this, v);
        this.vector = Vector.add(this, v).vector;
        return this;
    };
    Vector.prototype.dotProduct = function (v) {
        return Vector.dotProduct(this, v);
    };
    Vector.prototype.magnitude = function () {
        return Vector.magnitude(this);
    };
    // Static functions
    // --------------------------------------------------
    Vector.dotProduct = function (a, b) {
        this.validateDimension(a, b);
        var total = 0;
        for (var i = 0; i < a.vector.length; i++) {
            total += (a.vector[i] * b.vector[i]);
        }
        return total;
    };
    Vector.add = function (a, b) {
        this.validateDimension(a, b);
        var result = new Array(a.vector.length);
        for (var i = 0; i < a.vector.length; i++) {
            result[i] = (a.vector[i] + b.vector[i]);
        }
        return new Vector(result);
    };
    Vector.magnitude = function (a) {
        var total = 0;
        a.vector.forEach(function (val) {
            total += (val * val);
        });
        return Math.sqrt(total);
    };
    Vector.validateDimension = function (a, b) {
        if (a.vector.length != b.vector.length) {
            throw new Error("Vectors must be of the same dimension.");
        }
    };
    return Vector;
}());
exports.Vector = Vector;
