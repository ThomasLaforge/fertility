import { Symbol, IPosition } from "./Fertility";
import { Metropolis } from "./Metropolis";
import { ValleyTile } from "./ValleyTile";
import { District } from "./District";
const uuidv4 = require('uuid/v4');

export class Player {

    public id: string
    public name: string
    public tiles: ValleyTile[]
    public districts: District[]
    public metropolis: Metropolis
    public symbol: Symbol
    public cornCount: number
    public monuments: IPosition[] 

    constructor(
        name: string, symbol: Symbol, metropolis: Metropolis, monuments: IPosition[] = [], tiles: ValleyTile[] = [], 
        cornCount = 0, districts = new Array(7).fill(null), id = uuidv4()
    ){
        this.name = name
        this.id = id
        this.districts = districts
        this.tiles = tiles
        this.metropolis = metropolis
        this.symbol = symbol
        this.cornCount = cornCount
        this.monuments = monuments
    }

    get cornScore(){
        let scores = [0, 2, 4, 7, 10, 14, 18, 23, 28, 34, 40]
        let index = this.cornCount >= scores.length ? scores.length - 1 : this.cornCount
        return scores[index]
    }

    getNbMonumentsBuilt(){
        return this.monuments.length
    }
}