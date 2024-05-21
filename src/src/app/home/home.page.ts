import { Component } from '@angular/core';
import { MatrixService } from '../services/matrix.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  result: number | null = null;
  submittedMatrix: number[][] | null = null;

  constructor(private matrixService: MatrixService) {}

  handleMatrix(matrix: number[][]) {
    this.onMatrixSubmitted(matrix);
    this.result = this.matrixService.findPairs(matrix);
  }

  onMatrixSubmitted(matrix: number[][]) {
    this.submittedMatrix = matrix;
  }
}
