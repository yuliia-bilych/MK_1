import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatrixService {

  constructor() { }

  findPairs(matrix: number[][]): number {
    let pairs = 0;
    const rows = matrix.length;
    const columns = matrix[0].length;

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        if (j < columns - 1 && Math.abs(matrix[i][j]) === Math.abs(matrix[i][j + 1])) {
          pairs++;
        }
        if (i < rows - 1 && Math.abs(matrix[i][j]) === Math.abs(matrix[i + 1][j])) {
          pairs++;
        }
      }
    }
    return pairs;
  }
}
