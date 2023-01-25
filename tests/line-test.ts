import { Line, Point } from "../models"
import { Test } from "./test"

class LineTest extends Test{
    public run() {
        throw new Error("Method not implemented.")
    }
    
    public static createLine(start: Point, end: Point){
        return new Line(start, end)
    }
}

export default LineTest