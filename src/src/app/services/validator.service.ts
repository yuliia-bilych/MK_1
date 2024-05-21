import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Injectable({
    providedIn: 'root'
})
export class ValidatorService {

    constructor() { }

    validateDegree(control: AbstractControl): ValidationErrors | null {
        const value = control.value;
        if (value >= 1 && value <= 10 || value == null) {
        return null;
        } else {
        return { invalidDegree: true };
        }
    }

    validateMatrixCell(control: AbstractControl): ValidationErrors | null {
        const value = control.value;
        const pattern = /^-?\d+$/;
        if (pattern.test(value)) {
        return null;
        } else {
        return { invalidMatrixCell: true };
        }
    }
}
