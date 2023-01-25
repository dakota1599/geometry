import {Point, Vector} from "../models"
import { Test } from "./test"

const pointTest = () => {
    var a = new Point(1,2)
    var b = new Point(3,4)
    var c = Vector.add(a,b)

    return a.toString() == "(1, 2)" && b.toString() == "(3, 4)" && c.toString() == "(4, 6)" && Vector.dotProduct(c,c) == 52
}

export default pointTest

export class PointTest extends Test{
    
    run() {
        throw new Error("Method not implemented.")
    }

    static createPoint(x: number, y: number){
        return new Point(x,y)
    }

}