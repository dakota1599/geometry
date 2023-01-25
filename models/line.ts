import { Point } from "./";

export class Line {

    start: Point
    end: Point
    slope: number
    yInt: number

    constructor(start: Point, end: Point){
        this.start = start
        this.end = end
        this.slope = (end.y - start.y)/(end.x - start.x)
        this.yInt = start.y - (start.x*this.slope)
    }

    public toString(){
        return `(y = ${this.slope}x + ${this.yInt})`
    }
}