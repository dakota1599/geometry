import {Point, Vector} from "../models"
import { Test } from "./test"

class PointTest extends Test{
    
    run() {
        throw new Error("Method not implemented.")
    }

    static createPoint(x: number, y: number){
        return new Point(x,y)
    }

}

export default PointTest