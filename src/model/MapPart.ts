import { Tile } from "./Tile";
import { Orientation, Rotation } from "./Fertility";
import { rotate } from "../Utils";

export class MapPart {

    public tiles: Tile[][]
    public orientation: Orientation

    constructor(tiles: Tile[][], orientation = Orientation.Initial){
        this.orientation = orientation
        this.tiles = tiles
    }

    getOrientedTiles(){
        return this.orientation === Orientation.Initial ? this.tiles : rotate(this.tiles, Rotation.Reverse)
    }

}