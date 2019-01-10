import { MapPart } from "./MapPart";
import { Tile } from "./Tile";
import { IPlay, Field, JsonMapPart, DEFAULT_NB_PARTS } from "./Fertility";
import sampleSize from 'lodash/sampleSize'
import random from 'lodash/random'

const ALL_MAP_PARTS = (require('../datas/map_parts.json') as JsonMapPart[]).map(mp => new MapPart(mp.fields))

export class Board {

    public parts: MapPart[]
    public plays: IPlay[]
    public startPartIndex: number

    constructor(parts?: MapPart[], startPartIndex?: number, plays: IPlay[] = []){
        this.parts = parts || sampleSize(ALL_MAP_PARTS, DEFAULT_NB_PARTS)
        this.startPartIndex = startPartIndex === undefined ? random(0, DEFAULT_NB_PARTS - 1) : startPartIndex
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