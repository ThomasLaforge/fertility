import shuffle from 'lodash/shuffle'
import { JsonValley, JsonDistrict, Resource, JsonMetropolis } from './Fertility';
import { District } from './District';
import { Shop } from './Shop';
import { ValleyTile } from './ValleyTile';
import { Metropolis } from './Metropolis';

//////////////////////////////
//      Get collections     //
//////////////////////////////

// Valleys
const valleyDef = (require('../datas/valleys.json') as JsonValley)
const {resources, nbByMix, nbPair} = valleyDef
let valleys: ValleyTile[] = []

resources.forEach( (r: Resource) => {
    for (let i = 0; i < nbPair; i++) {
        valleys.push(new ValleyTile([r, r]))
    }
})
for (let i = 0; i < resources.length - 1; i++) {
    const resourceA = resources[i]
    for(let j = i + 1; j < resources.length; i++){
        const resourceB = resources[j]
        valleys.push(new ValleyTile([resourceA, resourceB]))
    }
}

export const VALLEY_COLLECTION = valleys

// Districts
export const DISTRICT_COLLECTION = (require('../datas/districts.json') as JsonDistrict[]).map(elt => {
    const shops = elt.shops.map(jsonShop => new Shop(jsonShop.needs, jsonShop.rewards))
    return new District(shops, elt.cost)
})

// Metropolis
export const METROPOLIS_COLLECTION = (require('../datas/metropolis.json') as JsonMetropolis[]).map(elt => {
    const shops = elt.shops.map(jsonShop => new Shop(jsonShop.needs, jsonShop.rewards))
    return new Metropolis(shops)
})


//////////////////////////////
//        Deck CLass        //
//////////////////////////////

export class Deck<T> {

    public elts: T[]

    constructor(elts: T[], autoShuffle = true){
        this.elts = elts
        autoShuffle && this.shuffle()
    }

    shuffle(){
        this.elts = shuffle(this.elts)
    }

    pick(nbElts = 1): T[]{
        // get cards
        const elts = this.elts.slice(0, nbElts)
        // remove it from deck
        this.elts = this.elts.slice(nbElts, this.elts.length)

        return elts
    }
}