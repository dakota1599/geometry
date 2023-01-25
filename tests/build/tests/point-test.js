"use strict";
exports.__esModule = true;
exports.pointTest = void 0;
var models_1 = require("../models");
var pointTest = function () {
    var a = new models_1.Point(1, 2);
    var b = new models_1.Point(3, 4);
    return a.toString() == "(1, 2)" && b.toString() == "(3, 4)";
};
exports.pointTest = pointTest;
