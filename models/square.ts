import { Line, Point } from "./";

export class Square{

    p1: Point
    p2: Point
    p3: Point
    p4: Point

    l1: Line
    l2: Line
    l3: Line
    l4: Line

    constructor(startPoint: Point, sideLength: number){
        this.p1 = startPoint
        this.p2 = new Point(this.p1.x, this.p1.y + sideLength)
        this.p3 = new Point(this.p1.x + sideLength, this.p1.y)
        this.p4 = new Point(this.p1.x + sideLength, this.p1.y + sideLength)

        this.l1 = new Line(this.p1, this.p2)
        this.l2 = new Line(this.p2, this.p3)
        this.l3 = new Line(this.p3, this.p4)
        this.l4 = new Line(this.p4, this.p1)
    }

    toString(){
        return `${this.p1} ${this.p2} ${this.p3} ${this.p4}`
    }

}