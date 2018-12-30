import { Shop } from "./Shop";
import { Resource, RewardType } from "./Fertility";

export class Metropolis {

    public shops: Shop[]

    constructor(shops: Shop[]){
        let defaultShop = new Shop([Resource.Joker], [{type: RewardType.PV, value: 2}])
        this.shops = shops.concat(defaultShop)
    }

}