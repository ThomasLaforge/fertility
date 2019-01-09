import { Tile } from "./Tile";
import { Resource } from "./Fertility";

export class ResourceTile extends Tile {
    
    public resource: Resource

    constructor(resource: Resource){
        super()
        this.resource = resource
    }
}