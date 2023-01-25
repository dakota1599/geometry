import { Point } from "./";

export class Object{
    private points: Point[]

    constructor(points: Point[]){
        this.points = points
    }

    sort(compareFn?: (a: Point, b: Point) => number){
        if(compareFn){
            return this.points.sort(compareFn)
        }
        return this.points.sort()
    }
}