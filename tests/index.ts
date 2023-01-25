import PointTest from './point-test'
import LineTest from './line-test'
import SquareTest from './square-test'
import { Point } from '../models'


var a = new Point(1, 2)
var b = new Point(3, 4)
var c = new Point(5, 6)

var l1 = LineTest.createLine(a, b)
var l2 = LineTest.createLine(b, c)

var s1 = SquareTest.createSquare(a, 5)

console.log(a.toString())
console.log(b.toString())
console.log(l1.toString())
console.log(l2.toString())
console.log(s1.toString())