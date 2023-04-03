import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Student, StudentService } from './student.service';

@Component({
  selector: 'app-student-list',
  template: `
    <ul>
      <li *ngFor="let student of students$ | async">
        {{ student.JMBAG }} - {{ student.ECTS }} ECTS - {{ student.paysForCollege ? 'pays' : 'does not pay' }}
      </li>
    </ul>
  `
})
export class StudentListComponent {
  students$: Observable<Student[]> | undefined;

  constructor(private studentService: StudentService) {}

  ngOnInit() {
    this.students$ = this.studentService.getStudents();
  }
}
