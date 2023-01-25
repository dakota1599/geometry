import {Point} from "../models"

const pointTest = () => {
    var a = new Point(1,2);
    var b = new Point(3,4);

    return a.toString() == "(1, 2)" && b.toString() == "(3, 4)"
}

export default pointTest