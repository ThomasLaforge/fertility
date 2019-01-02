import { Tile } from "./Tile";
import { IPosition, Resource } from "./Fertility";

export class ResourceTile extends Tile {
    
    public resource: Resource

    constructor(pos: IPosition, resource: Resource){
        super(pos)
        this.resource = resource
    }
}