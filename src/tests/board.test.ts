import { Board } from "../model/Board";
import { DEFAULT_NB_PARTS } from "../model/Fertility";

describe('board', () => {
    let b: Board
    beforeEach( () => {
        b = new Board()
    });

    describe('default board map', () => {
        it('nb board map parts', () => {
            expect(b.parts.length).toBe(DEFAULT_NB_PARTS);
        });

        it('board\'s width', () => {
            const bWidth = b.getInitialFields()[0].length
            expect(bWidth).toBe(4 * DEFAULT_NB_PARTS);
        });
        it('board\'s height', () => {
            const bHeight = b.getInitialFields().length
            expect(bHeight).toBe(8);
        });
        it('has startingTile', () => {
            expect(b.startPartIndex).toBeGreaterThanOrEqual(0)
            expect(b.startPartIndex).toBeLessThanOrEqual(DEFAULT_NB_PARTS)
        })
    })

    describe('add tiles', () => {
        it('add valley tile', () => {
        });
    })
})