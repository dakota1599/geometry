import { Point, Square } from "../models";
import { Test } from "./test"

class SquareTest extends Test{
    public run() {
        throw new Error("Method not implemented.");
    }

    static createSquare(start: Point, sideLength){
        return new Square(start, sideLength)
    }
    
    static printSquare(square: Square){
        return square.toString()
    }
}

export default SquareTest