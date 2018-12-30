import { Tile } from "./Tile";
import { Orientation } from "./Fertility";

export class MapPart {

    public tiles: Tile[][]
    public orientation: Orientation

    constructor(tiles: Tile[][], orientation = Orientation.Initial){
        this.orientation = orientation
        this.tiles = tiles
    }

}