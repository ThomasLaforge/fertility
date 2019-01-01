import { Rotation } from './model/Fertility'

export const rotateSide = (matrix: any[][], direction = Rotation.Left) => {
    const height = matrix.length;
    const width = matrix[0].length;
    const total = height * width;
    const rotated: any[][] = [];
  
    for (let i = 0; i < total; i++) {
        const y = i / width | 0;
        const x = i % width;
        const newY = direction === Rotation.Right ? x : width - 1 - x;
        const newX = direction === Rotation.Right ? height - 1 - y : y;
        const value = matrix[y][x]; 
  
        if (!rotated[newY]) rotated[newY] = [];
      
        rotated[newY][newX] = value;
    }
  
    return rotated;
}

export const rotate = (matrix: any[][], direction: Rotation) => {
    if(direction === Rotation.Initial){
        return matrix
    }
    else if(direction === Rotation.Reverse){
        return rotateSide(rotateSide(matrix, Rotation.Left), Rotation.Left)
    }
    else {
        return rotateSide(matrix, direction)
    }
}