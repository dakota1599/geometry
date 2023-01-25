import { Point } from "./";

export class Line {

    start: Point
    end: Point
    length: number
    private slope: number
    private yInt: number

    constructor(start: Point, end: Point){
        this.start = start
        this.end = end

        this.start.connect(this)
        this.end.connect(this)

        this.slope = (end.y - start.y)/(end.x - start.x)
        this.yInt = start.y - (start.x*this.slope)

        this.length = Math.sqrt(Math.pow(start.x-end.x, 2) + Math.pow(start.y-end.y, 2))
    }

    toString(){
        return `(y = ${this.slope}x + ${this.yInt}) | Length: ${this.length}`
    }
}