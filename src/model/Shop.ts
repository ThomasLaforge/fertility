import { IReward, Resource } from "./Fertility";

export class Shop {

    public needs: Resource[]
    public rewards: IReward[]

    constructor(needs: Resource[], rewards: IReward[]){
        this.needs = needs
        this.rewards = rewards
    }

}