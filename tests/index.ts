import PointTest from './point-test'
import LineTest from './line-test'
import { Point } from '../models'


var a = new Point(1, 2)
var b = new Point(3, 4)
var c = new Point(5, 6)

var l1 = LineTest.createLine(a, b)
var l2 = LineTest.createLine(b, c)

console.log(a)
console.log(b)
console.log(l1)
console.log(l2)