import { Line } from "./"

// Represents a two dimensional point on a grid.
export class Point{
    x: number
    y: number
    connections: Line[]
    constructor(x: number, y: number){
        this.x = x
        this.y = y
        this.connections = []
    }

    public toString() {
        return `(${this.x}, ${this.y})`
    }

    public connect(line: Line){
        if(this.connections.lastIndexOf(line) > -1) return
        this.connections.push(line)
    }

    public disconnect(line: Line){
        const id = this.connections.lastIndexOf(line)
        if(id < 0) return
        this.connections.splice(id, 1)
    }

    public static add(x: Point, y:Point){
        return new Point(x.x + y.x, x.y + y.y)
    }

    public static subtract(x: Point, y:Point){
        return new Point(x.x - y.x, x.y - y.y)
    }

}

// Similar to a Point, the Vector contains additional methods for linear algebra calculations.
export class Vector extends Point {

    constructor(x: number, y: number){
        super(x,y)
    }

    public static dotProduct(x: Vector, y: Vector){
        return (x.x * y.x) + (x.y * y.y)
    }
}