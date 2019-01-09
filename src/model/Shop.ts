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
        return true
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

}