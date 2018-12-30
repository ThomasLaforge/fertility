import { Rotation } from "./Fertility";

export class ValleyTile {

    public rotation: Rotation

    constructor(rotation = Rotation.Initial){
        this.rotation = rotation
    }

}