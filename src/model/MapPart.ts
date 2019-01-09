import { Orientation, Rotation, Field } from "./Fertility";
import { rotate } from "../Utils";

export class MapPart {

    public fields: Field[][]
    public orientation: Orientation

    constructor(tiles: Field[][], orientation = Orientation.Initial){
        this.orientation = orientation
        this.fields = tiles
    }

    getOrientedFields(){
        return this.orientation === Orientation.Initial ? this.fields : rotate(this.fields, Rotation.Reverse)
    }

}