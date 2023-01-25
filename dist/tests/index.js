"use strict";
exports.__esModule = true;
var models_1 = require("../models");
var a = new models_1.Vector([1, 1, 1]);
var b = new models_1.Vector([1, 6, 1]);
var c = new models_1.Point(5, 6);
var d = models_1.Vector.add(a, a);
console.log(d.toString());
console.log(d.magnitude());
d.add(a);
console.log(d.toString());
console.log(d.dotProduct(b));
// console.log(a.toString())
// console.log(b.toString())
// console.log(l1.toString())
// console.log(l2.toString())
// console.log(s1.toString())
