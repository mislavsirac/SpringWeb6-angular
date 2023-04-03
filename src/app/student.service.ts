import { Injectable } from '@angular/core';
import { Student } from './student/student.component';
import { Observable, of } from 'rxjs';

const MOCK_STUDENTS: Student[] = [
  { JMBAG: '1234567890', ECTS: 60, paysForCollege: true },
  { JMBAG: '0987654321', ECTS: 45, paysForCollege: false },
  { JMBAG: '1111111111', ECTS: 90, paysForCollege: true },
  { JMBAG: '2222222222', ECTS: 30, paysForCollege: false }
];


@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private students: Student[] = MOCK_STUDENTS;

  // Return the mocked array wrapped in an Observable
  getStudents(): Observable<Student[]> {
    return of(this.students);
  }
}
export { Student };

