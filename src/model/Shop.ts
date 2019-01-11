import { IReward, Resource, RewardType } from "./Fertility";
import uniq from 'lodash/uniq'
import { string } from "prop-types";

export class Shop {

    public needs: Resource[]
    public brings: Resource[]
    public rewards: IReward[]

    constructor(needs: Resource[], rewards: IReward[], brings: Resource[] = []){
        this.needs = needs
        this.rewards = rewards
        this.brings = brings
    }

    isComplete(){
        const comparator = (a: number, b: number) => a - b
        const needs = this.needs.slice()
        const brings = this.brings.slice()
        needs.sort(comparator)
        brings.sort(comparator)
        return JSON.stringify(brings) === JSON.stringify(needs)
    }

    getResourceNeededByResource(){
        let resources = uniq(this.needs)
        let res: {[key: string]: number} = {}
        resources.forEach( (r: Resource) => {
            res[r] = res[r] || 0
            res[r]++
        })
        return res
    }

    getResourceBringsByResource(){
        let resources = uniq(this.brings)
        let res: {[key: string]: number} = {}
        resources.forEach( (r: Resource) => {
            res[r] = res[r] || 0
            res[r]++
        })
        return res
    }

    getResourceNeeded(){
        let resources = uniq(this.needs)
        let res: {[key: string]: number} = {}
        let needsByResource = this.getResourceNeededByResource()
        let bringsByResource = this.getResourceNeededByResource()
        
        resources.forEach( (r: Resource) => {
            let needsForResource = needsByResource[r]
            let bringsForResource = bringsByResource[r]
            if(typeof needsForResource !== undefined && typeof bringsForResource !== undefined){
                res[r] = needsForResource - bringsForResource
            }
        })
        
        
        return Object.keys(res).map(r => Number(r))
    }

    bring(r: Resource){
        let added = false
        const stillSomePlace = this.brings.length < this.needs.length
        const resourceNeeded = this.getResourceNeeded().includes(r)
        
        if(stillSomePlace && resourceNeeded){
            added = true
            this.brings = this.brings.concat(r)
        }

        return added
    }

    get score(){
        return this.isComplete() 
            ? this.rewards.reduce( (sum, r) => r.type === RewardType.PV ? sum + (r.value as number) : sum, 0) 
            : 0
    }

}