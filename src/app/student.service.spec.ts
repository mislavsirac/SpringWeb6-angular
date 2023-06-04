import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentService } from './student.service';
import { Student } from './student/student.component';

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
