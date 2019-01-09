import { Shop } from "../model/Shop";
import { Resource, RewardType } from "../model/Fertility";

let smallShop: Shop

describe('shop', () => {
    beforeEach( () => {
        smallShop = new Shop(
            [Resource.Grapes, Resource.Bovines], 
            [{ type: RewardType.PV, value: 2}]
        )
    })
    
    it('shop need complete', () => {
        smallShop.bring(Resource.Grapes)
        expect(smallShop.brings.length).toBe(1);
    });  

    it('shop need too much add ', () => {
        smallShop.bring(Resource.Bovines)
        smallShop.bring(Resource.Bovines)
        // try to add
        smallShop.bring(Resource.Bovines)
        
        expect(smallShop.brings.length).toBe(2);
    });  
})