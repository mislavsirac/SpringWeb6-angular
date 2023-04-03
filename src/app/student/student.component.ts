import { Component } from '@angular/core';

export interface Student {
  JMBAG: string;
  ECTS: number | null;
  paysForCollege: boolean;
}

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
})
export class StudentComponent {
  student: Student = { JMBAG: '', ECTS: null, paysForCollege: false };
}
