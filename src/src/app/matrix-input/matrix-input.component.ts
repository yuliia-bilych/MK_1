import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { ValidatorService } from '../services/validator.service';

@Component({
  selector: 'app-matrix-input',
  templateUrl: './matrix-input.component.html',
  styleUrls: ['./matrix-input.component.scss'],
})
export class MatrixInputComponent implements OnInit {
  matrixForm: FormGroup; // Головна форма для вводу матриці
  @Output() matrixSubmitted = new EventEmitter<number[][]>(); // Вихідний подія для передачі матриці

  constructor(private fb: FormBuilder, private validatorService: ValidatorService) {
    // Ініціалізація форми з початковими значеннями і валідаторами
    this.matrixForm = this.fb.group({
      rows: [2, [Validators.required, this.validatorService.validateDegree.bind(this.validatorService)]],
      columns: [2, [Validators.required, this.validatorService.validateDegree.bind(this.validatorService)]],
      random: [false],
      matrix: this.fb.array([]), // Масив для зберігання рядків матриці
    });
  }

  ngOnInit() {
    // Підписка на зміни у полях 'rows' та 'columns', щоб оновити форму матриці
    this.matrixForm.get('rows')?.valueChanges.subscribe(() => this.generateMatrixControls());
    this.matrixForm.get('columns')?.valueChanges.subscribe(() => this.generateMatrixControls());
    this.generateMatrixControls(); // Початкова генерація матриці
  }

  // Отримання контролів матриці як FormArray
  get matrixControls(): FormArray {
    return this.matrixForm.get('matrix') as FormArray;
  }

  // Отримання контролів рядків матриці
  getRowControls(row: AbstractControl): FormArray {
    return row as FormArray;
  }

  // Обробка відправки форми
  onSubmit() {
    const rows = this.matrixForm.get('rows')?.value;
    const columns = this.matrixForm.get('columns')?.value;
  
    if (this.matrixForm.valid) {
      if (this.matrixForm.get('random')?.value) {
        this.generateRandomMatrix();
      } else {
        this.emitMatrix();
      }
    }else {
      // Обробка помилок валідації, якщо є
      console.log('Форма містить помилки');
    }
  }

  // Генерація контролів для введення значень матриці
  generateMatrixControls() {
    const rows = this.matrixForm.get('rows')?.value;
    const columns = this.matrixForm.get('columns')?.value;

    // Очищення існуючих контролів
    while (this.matrixControls.length) {
      this.matrixControls.removeAt(0);
    }

    // Додавання нових контролів для кожного рядка і стовпчика
    for (let i = 0; i < rows; i++) {
      const row = this.fb.array([]);
      for (let j = 0; j < columns; j++) {
        row.push(this.fb.control(0, [Validators.required, this.validatorService.validateMatrixCell.bind(this.validatorService)]));
      }
      this.matrixControls.push(row);
    }
  }

  // Генерація випадкової матриці
  generateRandomMatrix() {
    const rows = this.matrixForm.get('rows')?.value;
    const columns = this.matrixForm.get('columns')?.value;
    const matrix = [];

    for (let i = 0; i < rows; i++) {
      const row = [];
      for (let j = 0; j < columns; j++) {
        row.push(Math.floor(Math.random() * 21) - 10); // Генерація випадкового числа від -10 до 10
      }
      matrix.push(row);
    }

    this.matrixSubmitted.emit(matrix); // Передача згенерованої матриці
  }

  // Передача введеної матриці
  emitMatrix() {
    const matrix = this.matrixControls.controls.map((row) => {
      return (row as FormArray).controls.map(control => control.value);
    });
    this.matrixSubmitted.emit(matrix as number[][]); // Передача матриці як події
  }
}
