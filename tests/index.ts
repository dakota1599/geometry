import PointTest from './point-test'
import LineTest from './line-test'
import SquareTest from './square-test'
import { Point, Vector } from '../models'


var a = new Vector([3, 0, -3])
var b = new Vector([1, 6, 1])
var c = new Point(5, 6)

console.log(Vector.dotProduct(a, b))

// console.log(a.toString())
// console.log(b.toString())
// console.log(l1.toString())
// console.log(l2.toString())
// console.log(s1.toString())