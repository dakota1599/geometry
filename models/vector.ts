// A Vector represents a point in "n" dimensional space.
// This class provides calculation methods for vectors.
export class Vector{

    vector: number[]

    constructor(vector: number[]){
        this.vector = vector
    }

    public static dotProduct(a: Vector, b: Vector){
        if(a.vector.length != b.vector.length){
            throw new Error("Vectors must be of same dimension.")
        }
        var total = 0
        for(var i = 0; i < a.vector.length; i++){
            total += (a.vector[i] * b.vector[i])
        }

        return total;
    }
}