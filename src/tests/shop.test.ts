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
    
    it('shop needs complete by number', () => {
        smallShop.bring(Resource.Grapes)
        expect(smallShop.brings.length).toBe(1);
    });

    it('shop needs complete by nature - good order', () => {
        smallShop.bring(Resource.Grapes)
        smallShop.bring(Resource.Bovines)
        expect(smallShop.isComplete()).toBe(true);
    });
    
    it('shop needs complete by nature - bad order', () => {
        smallShop.bring(Resource.Bovines)
        smallShop.bring(Resource.Grapes)
        expect(smallShop.isComplete()).toBe(true);
    });

    it('shop needs not complete by nature', () => {
        smallShop.bring(Resource.Grapes)
        smallShop.bring(Resource.Grapes)
        expect(smallShop.isComplete()).toBe(false);
    });    

    it('shop needs too much add ', () => {
        smallShop.bring(Resource.Bovines)
        smallShop.bring(Resource.Bovines)
        // try to add
        smallShop.bring(Resource.Bovines)
        
        expect(smallShop.brings.length).toBe(2);
    }); 
    

})