import { rotate } from '../Utils'
import { Rotation } from '../model/Fertility';

const matrix = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [9, 10, 11]
];

const reverseMatrix = [
    [11, 10, 9],
    [8, 7, 6],
    [5, 4, 3],
    [2, 1, 0]    
]
  
const rotatedRight = [
    [9, 6, 3, 0],
    [10, 7, 4, 1],
    [11, 8, 5, 2],
];
  
const rotatedLeft = [
    [2, 5, 8, 11],
    [1, 4, 7, 10],
    [0, 3, 6, 9],
];
  
it('matrix rotate left', () => {
    expect(rotate(matrix, Rotation.Left)).toMatchObject(rotatedLeft);
});  
it('matrix rotate right', () => {
    expect(rotate(matrix, Rotation.Right)).toMatchObject(rotatedRight);
});
it('matrix rotate reverse', () => {
    expect(rotate(matrix, Rotation.Reverse)).toMatchObject(reverseMatrix);
});