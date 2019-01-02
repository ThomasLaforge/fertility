import { MapPart } from "./MapPart";
import { Tile } from "./Tile";

export class Board {

    public tiles: Tile[][]

    constructor(parts: MapPart[]){
        let tiles: Tile[][] = []
        
        parts.forEach( mapPart => {
            // mapPart.
        })

        this.tiles = tiles
    }

}