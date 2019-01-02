import { Rotation, Resource } from "./Fertility";

export class ValleyTile {

    public tiles: Resource[]
    public rotation: Rotation

    constructor(resources: Resource[], rotation = Rotation.Initial){
        this.rotation = rotation
        this.tiles = resources
    }

}