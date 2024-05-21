import { TestBed } from '@angular/core/testing';
import { MatrixService } from './matrix.service';

describe('MatrixService', () => {
  let service: MatrixService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatrixService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should find pairs in a matrix', () => {
    const matrix = [
      [1, -1, 3],
      [2, 3, 3],
      [1, 1, 4]
    ];
    const pairs = service.findPairs(matrix);
    expect(pairs).toBe(4);
  });

  it('should find no pairs in a matrix', () => {
    const matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ];
    const pairs = service.findPairs(matrix);
    expect(pairs).toBe(0);
  });

  it('should find pairs in a matrix with negative values', () => {
    const matrix = [
      [-1, 1, 2],
      [3, -2, 2],
      [3, 3, 3]
    ];
    const pairs = service.findPairs(matrix);
    expect(pairs).toBe(6);
  });
});
