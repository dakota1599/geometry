import PointTest from './point-test'
import LineTest from './line-test'
import SquareTest from './square-test'
import { Point, Vector } from '../models'


var a = new Vector([1, 1, 1])
var b = new Vector([1, 6, 1])
var c = new Point(5, 6)

var d = Vector.add(a, a)

console.log(d.toString())
console.log(d.magnitude())
d.add(a)
console.log(d.toString())
console.log(d.dotProduct(b))

// console.log(a.toString())
// console.log(b.toString())
// console.log(l1.toString())
// console.log(l2.toString())
// console.log(s1.toString())