import { IReward, Resource, RewardType } from "./Fertility";
import uniq from 'lodash/uniq'

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
        const comparator = (a, b) => a - b
        const needs = this.needs.slice()
        const brings = this.brings.slice()
        needs.sort(comparator)
        brings.sort(comparator)
        return JSON.stringify(brings) === JSON.stringify(needs)
    }

    getResourceNeeded(){
        return uniq(this.needs)
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