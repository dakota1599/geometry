import { Point } from "./";

export class Line {

    start: Point
    end: Point
    private slope: number
    private yInt: number

    constructor(start: Point, end: Point){
        this.start = start
        this.end = end

        this.start.connect(this)
        this.end.connect(this)

        this.slope = (end.y - start.y)/(end.x - start.x)
        this.yInt = start.y - (start.x*this.slope)
    }

    toString(){
        return `(y = ${this.slope}x + ${this.yInt})`
    }
}