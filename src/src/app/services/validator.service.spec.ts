import { TestBed } from '@angular/core/testing';
import { FormControl } from '@angular/forms';

import { ValidatorService } from './validator.service';

describe('ValidatorService', () => {
    let service: ValidatorService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(ValidatorService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    describe('validateDegree', () => {
        it('should return null for valid degree values', () => {
        expect(service.validateDegree(new FormControl(1))).toBeNull();
        expect(service.validateDegree(new FormControl(5))).toBeNull();
        expect(service.validateDegree(new FormControl(10))).toBeNull();
        expect(service.validateDegree(new FormControl(null))).toBeNull();
        });

        it('should return an error for invalid degree values', () => {
        expect(service.validateDegree(new FormControl(0))).toEqual({ invalidDegree: true });
        expect(service.validateDegree(new FormControl(11))).toEqual({ invalidDegree: true });
        expect(service.validateDegree(new FormControl(-1))).toEqual({ invalidDegree: true });
        });
    });

    describe('validateMatrixCell', () => {
        it('should return null for valid matrix cell values', () => {
        expect(service.validateMatrixCell(new FormControl(0))).toBeNull();
        expect(service.validateMatrixCell(new FormControl(123))).toBeNull();
        expect(service.validateMatrixCell(new FormControl(-456))).toBeNull();
        });

        it('should return an error for invalid matrix cell values', () => {
        expect(service.validateMatrixCell(new FormControl('abc'))).toEqual({ invalidMatrixCell: true });
        expect(service.validateMatrixCell(new FormControl('123abc'))).toEqual({ invalidMatrixCell: true });
        expect(service.validateMatrixCell(new FormControl(''))).toEqual({ invalidMatrixCell: true });
        });
    });
});
