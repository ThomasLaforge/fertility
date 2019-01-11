import { Shop } from "./Shop";

export class District {

    public shops: Shop[]
    public cost: number

    constructor(shops: Shop[], cost: number){
        this.shops = shops
        this.cost = cost
    }

}