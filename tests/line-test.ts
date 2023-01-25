import { Line, Point } from "../models"

const lineText = () => {
    var a = new Line(new Point(1,2), new Point(3,4))

    return a.toString() == "(y = 1x + 1)"
}

export default lineText