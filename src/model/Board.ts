import { MapPart } from "./MapPart";
import { Tile } from "./Tile";
import { IPlay, Field } from "./Fertility";
import { threadId } from "worker_threads";

export class Board {

    public parts: MapPart[]
    public plays: IPlay[]

    constructor(parts: MapPart[], plays: IPlay[] = []){
        this.parts = parts
        this.plays = plays
    }

    add(play: IPlay){
        this.plays.push(play)
    }

    getInitialFields(){
        let fields: Field[][] = []

        this.parts.forEach( (p, mapIndex) => {
            if(mapIndex === 0){
                fields = p.getOrientedFields()
            }
            else {
                p.getOrientedFields().forEach( (line: Field[], i) => {
                    fields[i].push(...line)
                })
            }
        })

        return fields
    }

    get(): (Tile | Field)[][] {
        // Get all initial tiles
        let fields = this.getInitialFields()

        // Replace tiles from Plays

        return fields
    }

}