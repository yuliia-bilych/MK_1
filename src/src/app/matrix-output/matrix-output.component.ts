import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-matrix-output',
  templateUrl: './matrix-output.component.html',
  styleUrls: ['./matrix-output.component.scss'],
})
export class MatrixOutputComponent implements OnChanges {
  @Input() matrix: number[][] | null = null;
  highlightedMatrix: string[][] = [];

  ngOnChanges(changes: SimpleChanges) {
    if (changes['matrix'] && this.matrix) {
      this.highlightedMatrix = this.highlightPairs(this.matrix);
    }
  }

  highlightPairs(matrix: number[][]): string[][] {
    const rows = matrix.length;
    const columns = matrix[0].length;
    const resultMatrix: string[][] = Array.from({ length: rows }, () => Array(columns).fill(''));

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        if (j < columns - 1 && Math.abs(matrix[i][j]) === Math.abs(matrix[i][j + 1])) {
          resultMatrix[i][j] = 'highlight';
          resultMatrix[i][j + 1] = 'highlight';
        }
        if (i < rows - 1 && Math.abs(matrix[i][j]) === Math.abs(matrix[i + 1][j])) {
          resultMatrix[i][j] = 'highlight';
          resultMatrix[i + 1][j] = 'highlight';
        }
      }
    }

    return resultMatrix;
  }
}
